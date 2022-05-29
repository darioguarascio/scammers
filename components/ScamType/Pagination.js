import Image from "next/image";

const Pagination = () => {
  return (
    <div>
      <div className="flex my-3 text-gray-700 font-normal text-sm items-center justify-between">
        <div>Showing 1 to 10 of 430 entries</div>
        <div className="flex items-center gap-2">
          <a href="#" className="bg-blue-100 p-2 rounded-md">
            <div className="h-4 w-7 relative">
              <Image src={"/assets/img/leftArrow.svg"} layout="fill"></Image>
            </div>
          </a>
          <a href="#" className="active-pagination bg-blue-100 p-2 rounded-md">
            <div className=" h-4 flex items-center justify-center font-medium">
              1
            </div>
          </a>
          <a href="#" className="bg-blue-100 p-2 rounded-md">
            <div className="h-4 flex items-center justify-center font-medium">
              2
            </div>
          </a>
          <div className="bg-blue-100 p-2 rounded-md">
            <div className="h-4 flex items-center justify-center font-medium">
              3
            </div>
          </div>
          <div className="bg-blue-100 p-2 rounded-md">
            <div className="h-4 flex items-center justify-center font-medium">
              ...
            </div>
          </div>
          <a href="#" className="bg-blue-100 p-2 rounded-md">
            <div className="h-4 flex items-center justify-center font-medium">
              1337
            </div>
          </a>
          <a href="#" className="bg-blue-100 p-2 rounded-md">
            <div className="h-4 w-7 relative">
              <Image src={"/assets/img/rightArrow.svg"} layout="fill"></Image>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
