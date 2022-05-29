import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full flex items-center justify-center mt-3 shadow-sm p-3">
        <ul className="md:flex md:items-center text-sm gap-7 font-medium text-gray-700">
          <li
            className={
              router.pathname == "/" ? "active-link p-2 sm:p-0" : "p-2 sm:p-0"
            }
          >
            <a href="/" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span>Home</span>
            </a>
          </li>
          <li
            className={
              router.pathname == "/scam-report"
                ? "active-link p-2 sm:p-0"
                : "p-2 sm:p-0"
            }
          >
            <a href="/scam-report" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    d="M6.15 15.85H7.35V10.85H10.1L11.1 12.85H15.85V7.15H12.9L11.9 5.15H6.15V15.85ZM11.825 11.65L10.825 9.65H7.35V6.35H11.175L12.175 8.35H14.65V11.65H11.825ZM10 19.5C8.68333 19.5 7.446 19.25 6.288 18.75C5.12933 18.25 4.125 17.575 3.275 16.725C2.425 15.875 1.75 14.8707 1.25 13.712C0.75 12.554 0.5 11.3167 0.5 10C0.5 8.68333 0.75 7.44567 1.25 6.287C1.75 5.129 2.425 4.125 3.275 3.275C4.125 2.425 5.12933 1.75 6.288 1.25C7.446 0.75 8.68333 0.5 10 0.5C11.3167 0.5 12.5543 0.75 13.713 1.25C14.871 1.75 15.875 2.425 16.725 3.275C17.575 4.125 18.25 5.129 18.75 6.287C19.25 7.44567 19.5 8.68333 19.5 10C19.5 11.3167 19.25 12.554 18.75 13.712C18.25 14.8707 17.575 15.875 16.725 16.725C15.875 17.575 14.871 18.25 13.713 18.75C12.5543 19.25 11.3167 19.5 10 19.5ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span>Report a Scammer</span>
            </a>
          </li>
          <li
            className={
              router.pathname == "/scammer-list"
                ? "active-link p-2 sm:p-0"
                : "p-2 sm:p-0"
            }
          >
            <a href="/scammer-list" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <span>Scammer List</span>
            </a>
          </li>
          <li
            className={
              router.pathname == "/scam-event"
                ? "active-link p-2 sm:p-0"
                : "p-2 sm:p-0"
            }
          >
            <a href="/scam-event" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <span>Scam Event</span>
            </a>
          </li>
          <li
            className={
              router.pathname == "/scam-type" ? "active-link p-2 sm:p-0" : ""
            }
          >
            <a href="scam-type" className="flex items-center gap-3">
              <div className="h-5 w-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
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
