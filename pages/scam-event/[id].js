import EventAction from "../../actions/EventAction";
import RelatedScam from "../../components/ScamEvent/RelatedScam";
import RelatedScammer from "../../components/ScamEvent/RelatedScammer";
import RelatedVictim from "../../components/ScamEvent/RelatedVictim";

const ScamEvent = ({ event }) => {
  return (
    <div>
      {event && (
        <div className="container px-4 mx-auto my-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="col-span-2 ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {event.scammer !== null && (
                  <div className="col-span-1">
                    <RelatedScammer scammer={event.scammer ?? null} />
                  </div>
                )}
                <div className="col-span-1">
                  <RelatedVictim victim={event} />
                </div>
              </div>
            </div>
            <div className="col-span-2 p-0 lg:px-5">
              <div>
                <h1 className="font-bolder text-blue-600 text-[24px]">
                  Scam Event
                </h1>
              </div>
              <div className="text-gray-700 mt-3 text-sm font-normal">
                <ul className="border-l border-gray-300">
                  {event.timeline &&
                    event.timeline.map((item) => (
                      <li key={item.time} className="pl-4 mb-3">
                        <div className="border rounded-md">
                          <div className="flex flex-start items-center pt-3 relative">
                            <div className="bg-blue-600 p-3 absolute -left-7 -top-2 w-2 h-2 rounded-full flex items-center justify-center">
                              <div>
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                >
                                  <path
                                    d="M0 10.875C0 11.4961 0.575893 12 1.28571 12H10.7143C11.4241 12 12 11.4961 12 10.875V4.5H0V10.875ZM1.71429 6.375C1.71429 6.16875 1.90714 6 2.14286 6H9.85714C10.0929 6 10.2857 6.16875 10.2857 6.375V7.875C10.2857 8.08125 10.0929 8.25 9.85714 8.25H2.14286C1.90714 8.25 1.71429 8.08125 1.71429 7.875V6.375ZM10.7143 1.5H9.42857V0.375C9.42857 0.16875 9.23571 0 9 0H8.14286C7.90714 0 7.71429 0.16875 7.71429 0.375V1.5H4.28571V0.375C4.28571 0.16875 4.09286 0 3.85714 0H3C2.76429 0 2.57143 0.16875 2.57143 0.375V1.5H1.28571C0.575893 1.5 0 2.00391 0 2.625V3.75H12V2.625C12 2.00391 11.4241 1.5 10.7143 1.5Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p className="text-blue-600 pl-4 text-sm mb-2 font-medium">
                              {item.time}
                            </p>
                          </div>
                          <div className="mt-0.5 ml-4 mb-6">
                            <p className="text-gray-700 text-xs mb-3">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="col-span-2">
                  {event.scam && (
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
                        <h4 className="text-xl font-medium col-span-5 text-gray-700 my-3">
                          Related Scam
                        </h4>

                        <div className="col-span-1">
                          <RelatedScam scam={event.scam} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScamEvent;

export async function loadEvents() {
  return new EventAction().getData("id");
}

export async function loadEvent(id) {
  return new EventAction().getOne(id);
}

export async function getServerSideProps(context) {
  const { params } = context;
  const event = await loadEvent(params.id);

  return {
    notFound: typeof event.data === "undefined",
    props: {
      event: typeof event.data !== "undefined" && event.data,
    },
  };
}

// export async function getStaticPaths() {
//   const data = await loadEvents();
//   const paths =
//     typeof data.data &&
//     data.data.events.map((event) => {
//       return {
//         params: {
//           id: `${event.id}`,
//         },
//       };
//     });

//   return {
//     paths,
//     fallback: false,
//   };
// }
