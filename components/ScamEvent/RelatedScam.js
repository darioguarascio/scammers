import Link from "next/link";

const RelatedScam = ({ scam }) => {
  const formatDate = (date) => {
    let d = new Date(date);
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da}-${mo}-${ye}`;
  };
  return (
    <div>
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
                  {formatDate(scam.date_created)}
                </span>
                <p className="line-clamp-4 mt-1 break-words w-full text-xs font-normal text-gray-600">
                  {scam.description}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RelatedScam;
