import Image from "next/image";
import { useState, useEffect } from "react";
import Item from "./Item";
import Pagination from "./Pagination";

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
    setItems([
      {
        id: 1,
        codeName: "Amazon Card Scammer",
        contact: "Blablabla",
        platform: "Blablabla",
        action: "",
      },
      {
        id: 2,
        codeName: "Amazon Card Scammer",
        contact: "Blablabla",
        platform: "Blablabla",
        action: "",
      },
      {
        id: 3,
        codeName: "Amazon Card Scammer",
        contact: "Blablabla",
        platform: "Blablabla",
        action: "",
      },
    ]);
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
        <div>
          <div className="flex items-center border rounded-md p-2">
            <span className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="placeholder-gray-500 ml-3 text-xs p-1 focus:outline-none"
              placeholder="Search name, email, or etc."
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-7 gap-3 mt-3 bg-gray-100 py-5 px-2 rounded-t-md font-medium text-gray-800 text-xs md:text-sm">
        <div
          onClick={() => changeSort("codeName")}
          className="col-span-2 flex items-center justify-between cursor-pointer"
        >
          <span className="font-bold">Code name of the scammer</span>
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
        <div
          onClick={() => changeSort("contact")}
          className="col-span-2 flex items-center justify-between cursor-pointer"
        >
          <span className="font-bold">Contact</span>
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
        <div
          onClick={() => changeSort("platform")}
          className="col-span-2 flex items-center justify-between cursor-pointer"
        >
          <span className="font-bold">Platform</span>
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
        <div
          onClick={() => changeSort("action")}
          className="col-span-2 lg:col-span-1 flex items-center justify-between cursor-pointer"
        >
          <span className="font-bold">Action</span>
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
      </div>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
      <div className="my-3">
        <Pagination />
      </div>
    </div>
  );
};

export default List;
