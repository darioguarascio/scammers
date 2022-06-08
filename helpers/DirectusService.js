import { Directus } from "@directus/sdk";

const TOKEN = process.env.DIRECTUS_TOKEN;
const API_URL = process.env.APP_DIRECTUS_URL;
const headers = {
  "CF-Access-Client-Secret": process.env.CF_ACCESS_CLIENT_SECRET,
  "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID,
};

const directus = new Directus(API_URL, {
  transport: { headers },
});

export const authDirectus = async () => {
  if (directus.auth.token) {
    return;
  }

  await directus.auth.static(TOKEN);
};

export default directus;
