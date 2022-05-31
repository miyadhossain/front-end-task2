import React from "react";
import DevImg from "../../assets/dev.png";
import OpenImg from "../../assets/open.png";
import ResearchImg from "../../assets/research.png";
import AppContainer from "../utilis/AppContainer";

const AboutCompanyContainer = () => {
  return (
    <AppContainer>
      <section className="text-gray-400 my-20">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            About Out Services
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            nihil a aliquid ad? Sunt iure quia autem quae, earum consectetur!
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5 flex-shrink-0">
              <img
                className="w-14 h-14 object-cover"
                src={OpenImg}
                alt="open source icon"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-xl title-font font-medium mb-3">
                Open Source
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum fuga nobis fugit officia saepe cumque, nostrum odio
                iusto, tempore nesciunt dolores incidunt debitis dicta facilis.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5 flex-shrink-0">
              <img
                className="w-14 h-14 object-cover"
                src={ResearchImg}
                alt="research icon"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-xl title-font font-medium mb-3">
                Research Zone
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                voluptates consequuntur eligendi unde sit architecto quod soluta
                aliquid, atque quas veritatis. Rem exercitationem vero harum.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-green-400 mb-5 flex-shrink-0">
              <img
                className="w-14 h-14 object-cover"
                src={DevImg}
                alt="development icon"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-white text-xl title-font font-medium mb-3">
                Product Development
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                quae quia minus quod quam, autem optio temporibus deleniti
                officiis doloremque cumque sint quos fugiat sapiente!
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppContainer>
  );
};

export default AboutCompanyContainer;
