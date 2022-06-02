import { useState, useEffect } from "react";
import Item from "./Item";
import Pagination from "./Pagination";

const List = ({ data, onSetPage, total, pageInfo }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(data);
  }, [data]);
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-1 cursor-pointer">
                <div className="flex flex-row items-center gap-x-2">
                  <span>Codenme of scammer</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-1 cursor-pointer">
                <div className="flex flex-row items-center gap-x-2">
                  <span>Contact</span>
                  <div className="grid"></div>
                </div>
              </th>
              <th scope="col" className="px-6 py-1 cursor-pointer">
                <div className="flex flex-row items-center gap-x-2">
                  <span>Platform</span>
                  <div className="grid"></div>
                </div>
              </th>
              <th scope="col" className="px-6 py-1 cursor-pointer text-right">
                <div className="flex flex-row items-center justify-center gap-x-2">
                  <span>Action</span>
                  <div></div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 &&
              items.map((item) => <Item item={item} key={item.id} />)}
          </tbody>
        </table>
      </div>
      {items.length > 0 && (
        <div className="my-3">
          <Pagination
            pageInfo={pageInfo}
            total={total}
            onSetPage={(page) => onSetPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default List;
