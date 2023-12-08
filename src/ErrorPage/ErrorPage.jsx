/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import { Navbar } from "@material-tailwind/react";
import Footer from "../Shared/Footer/Footer";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div >
        <div>
          <Navbar></Navbar>
        </div>
        <div>
           <section className="flex items-center my-6 h-full p-16">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we couldn't find this page.
              </p>
              <p className="mt-4 mb-8 dark:text-gray-400">
                But dont worry, you can find plenty of other things on our homepage.
              </p>
    
              <div className="flex items-center justify-center mt-6 gap-x-3">
                <Link to={"/"}>
                  {" "}
                  <button className="btn flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 rtl:rotate-180"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                    <span>Go back</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default ErrorPage;