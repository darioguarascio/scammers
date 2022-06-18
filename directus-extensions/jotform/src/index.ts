const multer = require("multer");
const forms = multer();

import { Router } from "express";
import { defineEndpoint } from "@directus/extensions-sdk";

type Gender = "Uomo" | "Donna";

type YesNo = "Si" | "No";

type TimelineEvent = {
  // Date
  Data: string;
  // Hour
  Ora: string;
  // Description
  Descrizione: string;
};

interface JotformData {
  // Submit url
  slug: string;
  // Language
  input_language: string;
  // ID of submit form event
  event_id: string;

  // Location
  q9_doveE: string;
  // Amount of money scammed
  q4_importoDella: string;
  // Was money taken
  q13_ilTruffatore: YesNo;
  // Reported to police
  q41_haiSporto: YesNo;

  // Events
  q26_scriviUna: string;

  // Links with images
  carica: string[];

  // Public hacker codename
  q16_nomeIn: string;
  // Gender
  q36_sesso: Gender;
  // Nationality
  q37_nazionalita: string;
  // Hacker name
  q38_nome: string;
  // Phone number
  q40_numeroDi: string;
  // Characteristics
  q39_caratteristichE: string;

  // Sender data
  q10_iTuoi: {
    // First name
    first: string;
    // Last name
    last: string;
  };
  // Email
  q15_email: string;
}

type DirectusGender = "M" | "F";
type DirectusTimelineDescriptionType = "markdown" | "html" | "text";

interface DirectusTimelineEvent {
  time: Date;
  desc_type: DirectusTimelineDescriptionType;
  description: string;
}

interface DirectusScam {}

interface DirectusScammer {
  codename: string;
  sex: DirectusGender;
  nationality: string;
  tags: string[];
  description: string;
  phone_numbers: string[];
  media: File[];
  links: string[];
}

interface DirectusEvent {
  scam?: DirectusScam;
  scammer?: Partial<DirectusScammer>;

  scam_date?: Date;
  scammer_phone?: string;

  successful?: boolean;
  reported_to_police?: boolean;
  amount?: number;
  timeline?: DirectusTimelineEvent[];

  victim_name?: string;
  victim_phones?: string[];
  victim_email?: string;
  victim_age?: number;
  victim_gender?: DirectusGender;
  victim_nationality?: string;
  victim_location?: string;
}

const JotformToDirectusDTO = (data: JotformData): DirectusEvent => {
  return {
    amount:
      data.q4_importoDella === "" ? undefined : Number(data.q4_importoDella),
    reported_to_police: data.q41_haiSporto === "Si",
    scam_date: new Date(),
    scammer_phone: data.q40_numeroDi,
    successful: data.q13_ilTruffatore === "Si",
    scammer: {
      codename: data.q16_nomeIn,
      sex: data.q36_sesso === "Uomo" ? "M" : "F",
      phone_numbers: data.q40_numeroDi ? [data.q40_numeroDi] : [],
      description: data.q39_caratteristichE,
      nationality: data.q37_nazionalita,
    },
    timeline:
      data.q26_scriviUna !== ""
        ? (JSON.parse(data.q26_scriviUna) as TimelineEvent[]).map((event) => ({
            desc_type: "markdown",
            description: event.Descrizione,
            time: getDateFromDateTime(event.Data, event.Ora),
          }))
        : [],
    victim_name: `${data.q10_iTuoi.first} ${data.q10_iTuoi.last}`,
    victim_email: data.q15_email,
  };
};

export default defineEndpoint(async (router, { services, getSchema }) => {
  const schema = await getSchema();

  const { ItemsService, FilesService, FoldersService } = services;

  const folderService = new FoldersService({ schema });
  const eventService = new ItemsService("events", {
    schema,
  });
  const fileService = new FilesService({ schema });

  router.post("/", forms.none(), async (req, res) => {
    try {
      const data = JSON.parse(req.body.rawRequest) as JotformData;

      const foldersCollection = await folderService.readByQuery({
        filter: {
          name: { _eq: "events" },
        },
        fields: "*",
      });
      const eventsFolderId = foldersCollection[0]?.id;

      for (const fileUrl of data.carica ?? []) {
        await fileService.importOne(fileUrl, {
          type: getContentTypeFromUrl(fileUrl),
          folder: eventsFolderId,
        });
      }

      const directusEvent: DirectusEvent = JotformToDirectusDTO(data);
      eventService.createOne(directusEvent);

      res.send();
    } catch (error) {
      console.log("ERROR:\n" + error);
      res.send(error);
    }
  });
});

const getContentTypeFromUrl = (url: string) => {
  const splitUrl = url.split("/");
  const fileName = splitUrl[splitUrl.length - 1]!;
  const fileNameSplit = fileName.split(".");
  const extension = fileNameSplit[fileNameSplit.length - 1]!;

  const contentType = CONTENT_TYPES[extension as keyof typeof CONTENT_TYPES];
  if (!contentType) {
    throw new Error("Unknown/unsupported file type.");
  }

  return contentType;
};

const getDateFromDateTime = (date: string, time: string) => {
  const [day, month, year] = date.split("/").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  return new Date(year!, month! - 1, day, hour, minute);
};

const CONTENT_TYPES = {
  aac: "audio/aac",
  avi: "video/x-msvideo",
  bmp: "image/bmp",
  csv: "text/csv",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  gz: "application/gzip",
  gif: "image/gif",
  htm: "text/html",
  html: "text/html",
  ico: "image/vnd.microsoft.icon",
  jpeg: "image/jpeg",
  jpg: "image/jpg",
  json: "application/json",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpeg: "video/mpeg",
  odp: "application/vnd.oasis.opendocument.presentation",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  odt: "application/vnd.oasis.opendocument.text",
  oga: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  opus: "audio/opus",
  png: "image/png",
  pdf: "application/pdf",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  rar: "application/vnd.rar",
  rtf: "application/rtf",
  svg: "image/svg+xml",
  tar: "application/x-tar",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "video/mp2t",
  txt: "text/plain",
  wav: "audio/wav",
  weba: "audio/webm",
  webm: "video/webm",
  webp: "image/webp",
  xhtml: "application/xhtml+xml",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xml: "application/xml",
  zip: "application/zip",
  "3gp": "video/3gpp",
  "7z": "application/x-7z-compressed",
};
