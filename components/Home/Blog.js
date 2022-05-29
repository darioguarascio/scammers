const Blog = ({ blog }) => {
  // , title, description, image = ''
  return (
    <div>
      <div className="col-span-1">
        <div>
          <div className="bg-[#eee] h-[240px] w-full rounded-md relative">
            {/* Image */}
            <span className="absolute top-3 right-3 bg-[#fc5a5a] p-1 px-3 rounded-md text-sm font-bold text-white">
              {blog.tag}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium my-2 text-gray-800">
            <p>Posted by {blog.author}</p>
            <span className="bg-gray-700 h-1 w-1 rounded-full block"></span>
            <p>{blog.date}</p>
          </div>
          <div>
            <h2 className="font-bolder text-[24px] text-2xl">{blog.title}</h2>
            <p className="text-sm text-gray-600 my-2">{blog.description}</p>
            <a
              href={blog.link ?? "#"}
              className="text-blue-700 font-bold text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
