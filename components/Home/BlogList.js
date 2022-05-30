import { useState, useEffect } from "react";
import Blog from "./Blog";

const BlogList = ({ data }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data.scams);
  }, [data]);

  return (
    <div>
      <div className="flex justify-center">
        <div className="my-3">
          <div className="text-center mb-1">
            <h2 className="font-bolder text-[32px] text-gray-800">
              Last Fraud Activity
            </h2>
          </div>
          <div>
            <ul className="font-medium text-sm my-2 flex items-center justify-center flex-wrap  gap-3">
              <li className="active-tab mb-4 md:mb-0">
                <span className="text-blue-600 bg-blue-100 p-1.5 px-4 rounded-md cursor-pointer">
                  All
                </span>
              </li>
              <li className="mb-4 md:mb-0">
                <span className="text-blue-600 bg-blue-100 p-1.5 px-4 rounded-md cursor-pointer">
                  Scams
                </span>
              </li>
              <li className="mb-4 md:mb-0">
                <span className="text-blue-600 bg-blue-100 p-1.5 px-4 rounded-md cursor-pointer">
                  Phising
                </span>
              </li>
              <li className="mb-4 md:mb-0">
                <span className="text-blue-600 bg-blue-100 p-1.5 px-4 rounded-md cursor-pointer">
                  Internet Banking Fraud
                </span>
              </li>
              <li className="mb-4 md:mb-0">
                <span className="text-blue-600 bg-blue-100 p-1.5 px-4 rounded-md cursor-pointer">
                  Identity Theft
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto my-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-11">
          {blogs && blogs.map((blog) => <Blog blog={blog} key={blog.id} />)}
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <button className="bg-blue-600 p-3 px-5 rounded-md text-white font-bolder text-sm">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogList;
