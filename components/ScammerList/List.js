import Image from "next/image";
import { useState, useEffect } from "react";
import Item from "./Item";
import Pagination from "./Pagination";
import scamListdata from "../../scamListdata.json"

const List = () => {
  const [sort, setSort] = useState({
    codeName: null,
    cotact: null,
    platform: null,
    action: null,
  });

  const [items, setItems] = useState([]);

  const changeSort = (item) => {
    sort[item] =
      sort[item] === "desc" ? "asc" : sort[item] === null ? "desc" : null;
    setSort({ ...sort });
  };

  useEffect(() => {
    setItems(scamListdata);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span>Show</span>
          <select name="" id="" className="p-2 px-3 bg-white border rounded-md">
            <option value="10">10</option>
          </select>
          <span>entries</span>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-1 cursor-pointer">
                <div className="flex flex-row items-center gap-x-2">
                  <span onClick={() => changeSort("codeName")}>Codenme of scammer</span>
                  <div className="grid">
                    <div
                        className={
                          sort.codeName == "desc" ? "text-gray-800" : "text-gray-400"
                        }
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 10"
                          fill="currentColor"
                      >
                        <path d="M6.07612 0.585166C5.87707 0.300808 5.45594 0.300807 5.25689 0.585166L0.967216 6.71327C0.735244 7.04466 0.97232 7.5 1.37683 7.5H9.95618C10.3607 7.5 10.5978 7.04466 10.3658 6.71327L6.07612 0.585166Z" />
                      </svg>
                    </div>
                    <div
                        className={
                          sort.codeName == "asc" ? "text-gray-800" : "text-gray-400"
                        }
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path d="M5.74287 7.41483C5.54382 7.69919 5.12269 7.69919 4.92364 7.41483L0.633964 1.28673C0.401992 0.955343 0.639068 0.5 1.04358 0.5H9.62292C10.0274 0.5 10.2645 0.955342 10.0325 1.28673L5.74287 7.41483Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-1 cursor-pointer">
                <div className="flex flex-row items-center gap-x-2">
                  <span onClick={() => changeSort("contact")}>Contact</span>
                  <div className="grid">
                    <div
                        className={
                          sort.contact == "desc" ? "text-gray-800" : "text-gray-400"
                        }
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 10"
                          fill="currentColor"
                      >
                        <path d="M6.07612 0.585166C5.87707 0.300808 5.45594 0.300807 5.25689 0.585166L0.967216 6.71327C0.735244 7.04466 0.97232 7.5 1.37683 7.5H9.95618C10.3607 7.5 10.5978 7.04466 10.3658 6.71327L6.07612 0.585166Z" />
                      </svg>
                    </div>
                    <div
                        className={
                          sort.contact == "asc" ? "text-gray-800" : "text-gray-400"
                        }
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path d="M5.74287 7.41483C5.54382 7.69919 5.12269 7.69919 4.92364 7.41483L0.633964 1.28673C0.401992 0.955343 0.639068 0.5 1.04358 0.5H9.62292C10.0274 0.5 10.2645 0.955342 10.0325 1.28673L5.74287 7.41483Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-1 cursor-pointer">
                <div className="flex flex-row items-center gap-x-2">
                  <span onClick={() => changeSort("platform")}>Platform</span>
                  <div className="grid">
                    <div
                        className={
                          sort.platform == "desc" ? "text-gray-800" : "text-gray-400"
                        }
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 10"
                          fill="currentColor"
                      >
                        <path d="M6.07612 0.585166C5.87707 0.300808 5.45594 0.300807 5.25689 0.585166L0.967216 6.71327C0.735244 7.04466 0.97232 7.5 1.37683 7.5H9.95618C10.3607 7.5 10.5978 7.04466 10.3658 6.71327L6.07612 0.585166Z" />
                      </svg>
                    </div>
                    <div
                        className={
                          sort.platform == "asc" ? "text-gray-800" : "text-gray-400"
                        }
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path d="M5.74287 7.41483C5.54382 7.69919 5.12269 7.69919 4.92364 7.41483L0.633964 1.28673C0.401992 0.955343 0.639068 0.5 1.04358 0.5H9.62292C10.0274 0.5 10.2645 0.955342 10.0325 1.28673L5.74287 7.41483Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-1 cursor-pointer text-right">
                <div className="flex flex-row items-center justify-end gap-x-2">
                  <span onClick={() => changeSort("action")}>Action</span>
                  <div className="grid">
                    <div
                        className={
                          sort.action == "desc" ? "text-gray-800" : "text-gray-400"
                        }
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 10"
                          fill="currentColor"
                      >
                        <path d="M6.07612 0.585166C5.87707 0.300808 5.45594 0.300807 5.25689 0.585166L0.967216 6.71327C0.735244 7.04466 0.97232 7.5 1.37683 7.5H9.95618C10.3607 7.5 10.5978 7.04466 10.3658 6.71327L6.07612 0.585166Z" />
                      </svg>
                    </div>
                    <div
                        className={
                          sort.action == "asc" ? "text-gray-800" : "text-gray-400"
                        }
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                        <path d="M5.74287 7.41483C5.54382 7.69919 5.12269 7.69919 4.92364 7.41483L0.633964 1.28673C0.401992 0.955343 0.639068 0.5 1.04358 0.5H9.62292C10.0274 0.5 10.2645 0.955342 10.0325 1.28673L5.74287 7.41483Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
          {
            items.map(item => {
              return (
                  <Item item={item} key={item.id} />
              )
            })
          }
          </tbody>
        </table>
      </div>
      <div className="my-3">
        <Pagination />
      </div>
    </div>
  );
};

export default List;
