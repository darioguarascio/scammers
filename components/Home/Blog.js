import Image from "next/image";
import Link from "next/link";

const Blog = ({ blog }) => {
  const formatDate = (date) => {
    let d = new Date(date);
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da}-${mo}-${ye}`;
  };
  return (
    <div>
      <div className="col-span-1">
        <div>
          <div className="bg-gray-200 h-[240px] w-full rounded-md relative">
            {blog.picture ? (
              <img
                src={
                  process.env.APP_DIRECTUS_URL +
                  "assets/" +
                  blog.picture +
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
          <div className="flex items-center gap-2 text-xs font-medium my-2 text-gray-800">
            <p>{formatDate(blog.date_created)}</p>
          </div>
          <div>
            <h2 className="font-bolder text-[24px] text-2xl">{blog.title}</h2>
            <p className="text-sm text-gray-600 my-2 line-clamp-3">
              {blog.description}
            </p>
            <Link href={"truffe/" + blog.slug ?? "#"}>
              <a className="text-blue-700 font-bold text-sm">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
