import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Pagination = ({ onSetPage, total, pageInfo }) => {
  const route = useRouter();
  const [maxPages, setMaxPages] = useState(0);
  useEffect(() => {
    var perPageCount =
      typeof route.query.perpage !== "undefined"
        ? parseInt(route.query.perpage)
        : 10;
    if ([10, 25, 50].includes(perPageCount) && total / perPageCount > 0) {
      setMaxPages(Math.floor(total / perPageCount));
    }
  }, [total]);
  return (
    <div>
      <div className="flex my-3 text-gray-700 font-normal text-sm items-center justify-between">
        <div>
          Showing{" "}
          {pageInfo.page * pageInfo.perpage - 10 === 0
            ? 1
            : pageInfo.page * pageInfo.perpage - 10}{" "}
          to {pageInfo.page * pageInfo.perpage} of{" "}
          {(maxPages === 0 ? 1 : maxPages) * pageInfo.perpage} entries
        </div>
        <div className="flex items-center gap-2">
          {parseInt(route.query.page) > 1 && (
            <span
              onClick={() => onSetPage(pageInfo.page - 1)}
              className="bg-blue-100 p-2 rounded-md cursor-pointer"
            >
              <div className="h-4 w-7 relative">
                <Image src={"/assets/img/leftArrow.svg"} layout="fill"></Image>
              </div>
            </span>
          )}

          {[...Array(maxPages)].map((x, i) =>
            pageInfo.page === i + 1 ? (
              <span
                key={i}
                className={
                  "active-pagination bg-blue-100 p-2 px-4 rounded-md  cursor-pointer "
                }
              >
                <div className="h-4 flex items-center justify-center font-medium">
                  {i + 1}
                </div>
              </span>
            ) : (
              <span
                onClick={() => onSetPage(i + 1)}
                key={i}
                className={"bg-blue-100 p-2 px-4 rounded-md  cursor-pointer "}
              >
                <div className=" h-4 flex items-centerjustify-center font-medium">
                  {i + 1}
                </div>
              </span>
            )
          )}
          {pageInfo.page < maxPages && (
            <span
              onClick={() => onSetPage(pageInfo.page + 1)}
              className="bg-blue-100 p-2 rounded-md cursor-pointer"
            >
              <div className="h-4 w-7 relative">
                <Image src={"/assets/img/rightArrow.svg"} layout="fill"></Image>
              </div>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
