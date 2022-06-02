const RelatedScammer = ({ scammer }) => {
  return (
    <div>
      <div className="bg-red-100 px-3 py-10 rounded-md">
        <div>
          <div className="flex gap-5 items-start">
            <div className="bg-red-200  p-2 rounded-md">
              <svg
                viewBox="0 0 40 32"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
              >
                <path
                  d="M30 0H10L8 12H32L30 0ZM0 16C0 16 4 18 20 18C36 18 40 16 40 16L32 12H8L0 16ZM16 24H24V26H16V24Z"
                  fill="#FC544B"
                />
                <path
                  d="M12 32C15.3137 32 18 29.3137 18 26C18 22.6863 15.3137 20 12 20C8.68629 20 6 22.6863 6 26C6 29.3137 8.68629 32 12 32Z"
                  fill="#FC544B"
                />
                <path
                  d="M28 32C31.3137 32 34 29.3137 34 26C34 22.6863 31.3137 20 28 20C24.6863 20 22 22.6863 22 26C22 29.3137 24.6863 32 28 32Z"
                  fill="#FC544B"
                />
              </svg>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-7">
                <div className="col-span-1">
                  <div>
                    <h2 className="text-xs text-gray-700 font-medium">
                      Scammer Codename
                    </h2>
                    <span className="text-sm text-gray-800 font-medium">
                      {typeof scammer.codename !== "undefiend"
                        ? scammer.codename
                        : "N/A"}
                    </span>
                  </div>
                  <div>
                    <h2 className="mt-3 text-xs text-gray-700 font-medium">
                      Phone Number
                    </h2>
                    <span className="text-sm text-gray-800 font-medium">
                      <ul>
                        {scammer.phone_numbers ? (
                          <ul>
                            {scammer.phone_numbers.map((item) => (
                              <li className="mt-1" key={item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          "N/A"
                        )}
                      </ul>
                    </span>
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <h2 className="text-xs text-gray-700 font-medium">Sex</h2>
                    <span className="text-sm text-gray-800 font-medium">
                      {typeof scammer.sex !== "undefiend" ? scammer.sex : "N/A"}
                    </span>
                  </div>
                  <div>
                    <h2 className="mt-3 text-xs text-gray-700 font-medium">
                      Link
                    </h2>
                    <span className="text-sm text-gray-800  font-medium">
                      {typeof scammer.links !== "undefined" ? (
                        <a
                          href={scammer.links}
                          target="_blank"
                          className="break-words"
                        >
                          {scammer.links}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedScammer;
