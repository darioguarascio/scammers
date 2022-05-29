import Head from "next/head";
import Image from "next/image";
import BlogList from "../components/Home/BlogList";
import MainSection from "../components/Home/MainSection";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navigation />
      <MainSection />
      <BlogList />
      <div className="bg-[#333] p-4 py-5">
        <div className="container px-4 mx-auto grid grid-cols-3">
          <div className="col-span-1">
            <h1 className="text-xl font-bolder text-white">Truffatori</h1>
          </div>
          <div className="col-span-1 text-center">
            <span className="text-white text-xs font-bold">
              All Rights Reserved
            </span>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
