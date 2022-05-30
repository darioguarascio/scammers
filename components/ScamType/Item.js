const Item = ({ item }) => {
  return (
    <div>
      <div>
        <div className="col-span-1">
          <div>
            <div className="bg-gray-200 h-[240px] w-full rounded-t-md relative">
              {/* Image */}
            </div>
            <div className="bg-blue-50 p-5 rounded-b-md">
              <h2 className="font-bolder text-[14px] text-blue-600 text-2xl">
                {item.tag}
              </h2>
              <h2 className="font-bolder text-[24px] text-2xl">{item.title}</h2>
              <p className="text-sm text-gray-600 my-2">{item.description}</p>
              <a
                href={item.link ?? "#"}
                className="text-red-400 font-bold text-sm"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
