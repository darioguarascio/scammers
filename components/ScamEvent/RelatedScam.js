import { useTranslation } from "next-i18next";
import Link from "next/link";
import { getFormattedDateTime } from "../../helpers/time";
import Markdown from "react-markdown";

const RelatedScam = ({ scam }) => {
  const { i18n } = useTranslation();

  return (
    <div>
      <Link href={"/truffe/" + scam.slug ?? "#"}>
        <a>
          <div className="p-2 rounded-md py-3 bg-blue-100">
            <div className=" h-[180px] w-full rounded-md relative">
              {scam.picture ? (
                <img
                  src={
                    process.env.APP_DIRECTUS_URL +
                    "assets/" +
                    scam.picture +
                    "?height=200"
                  }
                  loading="lazy"
                  className="h-full object-cover w-full rounded-md"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <p className="font-bolder text-gray-500">No Photo</p>
                    <div className="text-xs">
                      <small className="font-normal text-gray-700">
                        Truffatori
                      </small>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-1 p-2">
              <h2 className="font-bold text-base text-gray-700">
                {scam.title}
              </h2>
              <span className=" font-normal text-xs">
                {getFormattedDateTime(scam.date_created, i18n.language, {
                  timeStyle: undefined,
                })}
              </span>
              <span className="line-clamp-4 mt-1 break-words w-full text-xs font-normal text-gray-600">
                <Markdown>{scam.description}</Markdown>
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default RelatedScam;
