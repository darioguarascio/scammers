import { useState, useEffect } from "react";
import Blog from "./Blog";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs([
      {
        id: 1,
        tag: "Scams",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        author: "Anon",
        date: "29 May 2022",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis no...`,
        image: "",
        link: "",
      },
      {
        id: 2,
        tag: "Phising",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        author: "Anon",
        date: "29 May 2022",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis no...`,
        image: "",
        link: "",
      },
      {
        id: 3,
        tag: "Identity Theft",
        title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
        author: "Anon",
        date: "29 May 2022",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis no...`,
        image: "",
        link: "",
      },
    ]);
  }, []);

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
            <ul className="font-medium text-sm my-2 flex items-center gap-3">
              <li className="active-tab">
                <span className="text-[#1565D8] bg-[#E8F0FB] p-1.5 px-4 rounded-md cursor-pointer">
                  All
                </span>
              </li>
              <li>
                <span className="text-[#1565D8] bg-[#E8F0FB] p-1.5 px-4 rounded-md cursor-pointer">
                  Scams
                </span>
              </li>
              <li>
                <span className="text-[#1565D8] bg-[#E8F0FB] p-1.5 px-4 rounded-md cursor-pointer">
                  Phising
                </span>
              </li>
              <li>
                <span className="text-[#1565D8] bg-[#E8F0FB] p-1.5 px-4 rounded-md cursor-pointer">
                  Internet Banking Fraud
                </span>
              </li>
              <li>
                <span className="text-[#1565D8] bg-[#E8F0FB] p-1.5 px-4 rounded-md cursor-pointer">
                  Identity Theft
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto my-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-11">
          {blogs.map((blog) => (
            <Blog blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <button className="bg-[#3254fe] p-3 px-5 rounded-md text-white font-bolder text-sm">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogList;
