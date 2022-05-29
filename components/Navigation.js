import Image from "next/image";

const Navigation = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center mt-3 shadow-sm p-3">
        <ul className="flex items-center text-sm gap-7 font-medium text-gray-700">
          <li className="active-link">
            <a href="#" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <Image src={"/assets/img/home.svg"} layout="fill"></Image>
              </div>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <Image src={"/assets/img/report.svg"} layout="fill"></Image>
              </div>
              <span>Report a Scammer</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <Image src={"/assets/img/list.svg"} layout="fill"></Image>
              </div>
              <span>Scammer List</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <Image src={"/assets/img/flag.svg"} layout="fill"></Image>
              </div>
              <span>Scam Event</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <Image src={"/assets/img/type.svg"} layout="fill"></Image>
              </div>
              <span>Scam Type</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
