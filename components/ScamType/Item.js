import Link from "next/link";

const Item = ({ item }) => {
  return (
    <div>
      <div>
        <div className="col-span-1">
          <div>
            <div className="bg-gray-200 h-[240px] w-full rounded-t-md relative">
              {item.picture ? (
                <img
                  src={
                    process.env.APP_DIRECTUS_URL +
                    "assets/" +
                    item.picture +
                    "?height=340"
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
            <div className="bg-blue-50 p-5 rounded-b-md">
              <h2 className="font-bolder text-[14px] text-blue-600 text-2xl">
                {item.tag}
              </h2>
              <Link href={"truffe/" + item.slug ?? "#"}>
                <a>
                  <h2 className="font-bolder text-[24px] text-2xl">
                    {item.title}
                  </h2>
                </a>
              </Link>
              <p className="text-sm text-gray-600 my-2  line-clamp-3">
                {item.description}
              </p>
              <Link href={"truffe/" + item.slug ?? "#"}>
                <a className="text-red-400 font-bold text-sm">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
