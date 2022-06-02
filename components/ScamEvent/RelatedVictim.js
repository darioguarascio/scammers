const RelatedVictim = ({ victim }) => {
  return (
    <div className=" h-full">
      <div className="bg-blue-100 h-full px-3 py-4 rounded-md">
        <div>
          <div className="flex gap-5 items-start">
            <div className="bg-blue-200 p-2 rounded-md">
              <svg
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="currentColor"
              >
                <path
                  d="M13.9998 14C12.1665 14 10.5971 13.3472 9.2915 12.0417C7.98595 10.7361 7.33317 9.16666 7.33317 7.33332C7.33317 5.49999 7.98595 3.93055 9.2915 2.62499C10.5971 1.31943 12.1665 0.666656 13.9998 0.666656C15.8332 0.666656 17.4026 1.31943 18.7082 2.62499C20.0137 3.93055 20.6665 5.49999 20.6665 7.33332C20.6665 9.16666 20.0137 10.7361 18.7082 12.0417C17.4026 13.3472 15.8332 14 13.9998 14ZM0.666504 27.3333V22.6667C0.666504 21.7222 0.909838 20.8539 1.3965 20.0617C1.88206 19.2705 2.52761 18.6667 3.33317 18.25C5.05539 17.3889 6.80539 16.7428 8.58317 16.3117C10.3609 15.8817 12.1665 15.6667 13.9998 15.6667C15.8332 15.6667 17.6387 15.8817 19.4165 16.3117C21.1943 16.7428 22.9443 17.3889 24.6665 18.25C25.4721 18.6667 26.1176 19.2705 26.6032 20.0617C27.0898 20.8539 27.3332 21.7222 27.3332 22.6667V27.3333H0.666504Z"
                  fill="#3254FE"
                />
              </svg>
            </div>
            <div className="grid grid-cols-2 w-full gap-7">
              <div className="col-span-1">
                <div>
                  <h2 className="text-xs text-gray-700 font-medium">
                    Victim Name
                  </h2>
                  <span className="text-sm text-gray-800 font-medium">
                    {victim.victim_name ?? "N/A"}
                  </span>
                </div>
                <div>
                  <h2 className="mt-3 text-xs text-gray-700 font-medium">
                    Location
                  </h2>
                  <span className="text-sm text-gray-800 font-medium">
                    {victim.victim_location ?? "N/A"}
                  </span>
                </div>
                <div>
                  <h2 className="mt-3 text-xs text-gray-700 font-medium">
                    Nationality
                  </h2>
                  <span className="text-sm text-gray-800 font-medium">
                    {victim.victim_nationality ?? "N/A"}
                  </span>
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <h2 className="text-xs text-gray-700 font-medium">Sex</h2>
                  <span className="text-sm text-gray-800 font-medium">
                    {victim.victim_sex ?? "N/A"}
                  </span>
                </div>
                <div>
                  <h2 className="mt-3 text-xs text-gray-700 font-medium">
                    Age
                  </h2>
                  <span className="text-sm text-gray-800 font-medium">
                    {victim.victim_age ?? "N/A"}
                  </span>
                </div>
                <div>
                  <h2 className="mt-3 text-xs text-gray-700 font-medium">
                    Amount
                  </h2>
                  <span className="text-sm text-gray-800 font-medium">
                    € {victim.amount ?? "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedVictim;
