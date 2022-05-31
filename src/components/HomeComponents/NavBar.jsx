import React from "react";
import AppContainer from "../utilis/AppContainer";

const NavBar = () => {
  return (
    <AppContainer>
      <header className="text-white body-font my-10">
        <div className="flex flex-wrap flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">LOGO</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-lg justify-center cursor-pointer">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <div className="space-x-4">
            <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 text-gray-900">
              LOGIN
            </button>
            <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 text-white font-bold rounded text-base mt-4 md:mt-0">
              SIGN UP
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </AppContainer>
  );
};

export default NavBar;
