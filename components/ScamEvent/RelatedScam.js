import Link from "next/link";

const RelatedScam = ({ scam }) => {
  return (
    <div>
      <h4 className="text-xl font-medium text-gray-700 my-3">Related Scam</h4>
      <div>
        <Link href={"/truffe/" + scam.slug ?? "#"}>
          <a className="flex items-center">
            <div className="bg-gray-200 h-[100px] w-[150px] rounded-md relative">
              {scam.picture ? (
                <img
                  src={
                    process.env.APP_DIRECTUS_URL +
                    "assets/" +
                    scam.picture +
                    "?height=140"
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
            <div className="ml-2">
              <h2 className="font-bold text-sm text-gray-700">{scam.title}</h2>
              <p className=" line-clamp-4 w-72 text-xs font-normal text-gray-600">
                {scam.description}
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RelatedScam;
