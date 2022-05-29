const Item = ({ item }) => {
  return (
    <div>
      <div className="grid grid-cols-7 gap-3 border border-t-0 py-5 px-2 font-medium text-gray-800 text-sm">
        <div className="col-span-2 flex items-center justify-between cursor-pointer">
          <span className="font-bold">{item.codeName}</span>
        </div>
        <div className="col-span-2 flex items-center justify-between cursor-pointer">
          <span className="font-normal">{item.contact}</span>
        </div>
        <div className="col-span-2 flex items-center justify-between cursor-pointer">
          <span className="font-normal">{item.platform}</span>
        </div>
        <div className="col-span-1 flex items-center justify-between cursor-pointer">
          <a
            className="mr-2 bg-red-400 hover:bg-red-500 inline-block p-3 text-xs text-white font-semibold leading-none border rounded-md"
            href={item.action ?? "#"}
          >
            Report a Scam
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
