import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div class="container px-4 mx-auto">
        <nav class="flex items-center py-6">
          <a
            class="text-2xl font-semibold leading-none text-[#3254fe]"
            href="#"
          >
            Truffatori
          </a>
          <div class="ml-auto">
            <a
              class="mr-2 inline-block px-6 py-3 text-sm text-blue-600 hover:text-[blue-700] font-semibold leading-none border border-[#3254fe] rounded-md"
              href="#"
            >
              Log In
            </a>
            <a
              class="inline-block px-6 py-3 text-sm font-semibold leading-none bg-[#3254fe] text-white rounded-md"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>
      <hr />
    </div>
  );
}
