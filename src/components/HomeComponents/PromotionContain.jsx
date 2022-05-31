import React from "react";
import DevImg from "../../assets/webdev.jpg";
import AppContainer from "../utilis/AppContainer";

const PromotionContain = () => {
  return (
    <AppContainer>
      <div className="flex flex-wrap my-20">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={DevImg}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-green-400 text-lg title-font font-medium mb-3">
                Web Design & Development
              </h2>
              <p className="leading-relaxed text-base text-white">
                Web development is the work involved in developing a website for
                the Internet or an intranet. Web development can range from
                developing a simple single static page of plain text to complex
                web applicatio.
              </p>
              <a className="mt-3 text-blue-600 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-green-400 text-lg title-font font-medium mb-3">
                Mobile App Development
              </h2>
              <p className="leading-relaxed text-base text-white">
                Mobile app development is the act or process by which a mobile
                app is developed for mobile devices, such as personal digital
                assistants, enterprise digital assistants or mobile phones.
              </p>
              <a className="mt-3 text-green-400 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-green-400 text-xl font-semibold mb-3">
                Digital Marketing
              </h2>
              <p className="leading-relaxed text-base text-white">
                Digital marketing is the component of marketing that uses the
                Internet and online based digital technologies such as desktop
                computers, mobile phones and other digital media and platforms
                to promote products and services.
              </p>
              <a className="mt-3 text-blue-600 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default PromotionContain;
