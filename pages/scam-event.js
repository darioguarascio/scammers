import Link from "next/link";
import EventAction from "../actions/EventAction";
import RelatedScam from "../components/ScamEvent/RelatedScam";
import RelatedScammer from "../components/ScamEvent/RelatedScammer";
import RelatedVictim from "../components/ScamEvent/RelatedVictim";

const ScamEvent = ({ event }) => {
  return (
    <div>
      <div className="container px-4 mx-auto my-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="col-span-1">
            {/* <div className="bg-gray-200 h-[350px] w-full rounded-md relative">

              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <p className="font-bolder text-gray-500">No Photo</p>
                  <div className="text-xs">
                    <small className="font-normal text-gray-700">
                      Truffatori
                    </small>
                  </div>
                </div>
              </div>

            </div> */}
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                {event.victim_name && <RelatedVictim victim={event} />}
              </div>
              <div className="col-span-1">
                {event.scammer && <RelatedScammer scammer={event.scammer} />}
              </div>
            </div>
          </div>
          <div className="col-span-2 p-0 lg:px-5">
            <div>
              <h1 className="font-bolder text-red-400 text-[24px]">
                Scam Event
              </h1>
            </div>
            <div className="text-gray-700 text-sm font-normal">
              <ol className="border-l border-gray-300">
                {event.timeline &&
                  event.timeline.map((item) => (
                    <li key={item.time}>
                      <div className="flex flex-start items-center pt-3">
                        <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                        <p className="text-gray-600 text-sm">{item.time}</p>
                      </div>
                      <div className="mt-0.5 ml-4 mb-6">
                        <p className="text-gray-600 mb-3">{item.description}</p>
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2">
              <div className="col-span-2">
                {event.scam && <RelatedScam scam={event.scam} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function loadEvent() {
  return new EventAction().getLatest();
}
export async function getStaticProps() {
  const event = await loadEvent();
  return {
    props: {
      event: event[0] !== "undefined" ? event[0] : null,
    },
  };
}
export default ScamEvent;
