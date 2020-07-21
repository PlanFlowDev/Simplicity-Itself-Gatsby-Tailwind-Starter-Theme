import React from 'react';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import MiraFarmsImage1 from 'src/images/mira-farms-1.jpeg';
import SelloxImage1 from 'src/images/sellox.png';
import GastbyIcon from 'src/images/gatsby-icon.png';
import TailwindIcon from 'src/images/tailwind.png';
import SEO from 'src/components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="max-w-6xl p-2 mt-4 sm:m-auto sm:p-12">
      <div className="flex flex-col pb-10 border-b-2 md:flex-row">
        <div className="flex flex-col justify-center max-w-md md:w-1/2">
          <div className="text-2xl font-black uppercase md:text-5xl text-primary">
            <span className="">Quality Theme, Grown From <img
                alt="card img"
                className="w-10 rounded-t"
                src={GastbyIcon}
              ></img> and <img
              alt="card img"
              className="w-10 rounded-t"
              src={TailwindIcon}
            ></img></span>
          </div>
          <div className="mt-4 text-xl">
            Founded in 2018, Mira Farms has been growing high-quality,
            sustainable rice for the gambian market.
          </div>
          <div className="h-16 my-5 mt-10">
            <Link
              to="/our-story"
              className="w-48 px-4 py-2 text-lg font-medium text-center text-yellow-100 rounded shadow-md cursor-pointer hover:no-underline bg-orange hover:bg-orange-dark"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex w-full -mt-5 md:justify-end md:w-1/2">
          <div className="bg-dots">
            <div className="z-10 max-w-md mt-6 ml-4 rounded-full shadow-2xl">
              <img
                alt="card img"
                className="rounded-t"
                src={MiraFarmsImage1}
              ></img>
              <div className="p-10 text-2xl bg-white">
                <img
                  alt="quote"
                  className="float-left mr-1"
                  src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"
                ></img>{' '}
                Our dream with Mira Farms is to achieve true rice sustenance
                within The Gambia.
                <p className="mt-4 text-sm">- Mandou P Fofana, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Farm Section */}
      <div className="container pt-2 pb-6 mx-auto border-b-2">
        <h1 className="py-4 text-center font-slim text-primary">Our Farm</h1>
        <div className="flex justify-center px-6 my-4">
          <div className="w-60 md:w-full md:flex-row sm:flex-col">
            <div className="flex w-full p-4 mr-2 bg-white rounded shadow-xl md:h-auto sm:h-40">
              <img
                className="w-full h-auto bg-gray-400 bg-cover rounded"
                src={MiraFarmsImage1}
                alt=""
              ></img>
            </div>
            <div className="w-full p-5 bg-white">
              <div className="mb-4 text-center sm:px-8">
                <h3 className="pt-4 mb-2 text-2xl">Farm Name Here</h3>
                <p className="mb-4 text-sm text-gray-700">
                  Description of the farm location and little backstory, what
                  the farm does and grows etc.
                </p>
              </div>
              <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="./index.html"
                  >
                    Find Us On Google Maps!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Products Section */}
      <div className="container pt-2 pb-6 mx-auto mt-2 border-b-4 sm:block">
        <h1 className="py-4 text-center font-slim text-brown">Our Products</h1>
        <div className="flex flex-wrap justify-center px-6 my-4 md:flex-row sm:w-auto">
          {/* Products Here*/}
          <div className="product sm:max-w-sm">
            <img
              className="w-full"
              src={MiraFarmsImage1}
              alt="Bag Of Rice"
            ></img>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                MiraFarms Original Rice
              </div>
              <p className="mb-4 text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button className="flex px-4 py-2 mb-3 ml-6 text-sm font-bold text-white rounded shadow-sm sm:text-base bg-orange hover:bg-orange-dark">
              Buy On Sellox
              <img className="w-6 ml-3" src={SelloxImage1}></img>
            </button>
            <div className="flex flex-col px-6 py-4 sm:flex-row">
              <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-primary sm:mb-0">
                D1,250
              </span>
              <span className="w-20 mr-2 text-white sm:w-auto prd-tag bg-brown-light">
                50KG
              </span>
              <span className="hidden mr-2 text-gray-600 bg-gray-100 md:block prd-tag">
                #gambia
              </span>
              <span className="hidden text-gray-600 bg-gray-100 md:block prd-tag">
                #farming
              </span>
            </div>
          </div>
          <div className="product sm:max-w-sm">
            <img
              className="w-full"
              src={MiraFarmsImage1}
              alt="Bag Of Rice"
            ></img>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                MiraFarms Original Rice
              </div>
              <p className="mb-4 text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button className="flex px-4 py-2 mb-3 ml-6 text-sm font-bold text-white rounded shadow-sm sm:text-base bg-orange hover:bg-orange-dark">
              Buy On Sellox
              <img className="w-6 ml-3" src={SelloxImage1}></img>
            </button>
            <div className="flex flex-col px-6 py-4 sm:flex-row">
              <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-primary sm:mb-0">
                D2,500
              </span>
              <span className="w-20 mr-2 text-white sm:w-auto prd-tag bg-brown-light">
                50KG
              </span>
              <span className="hidden mr-2 text-gray-600 bg-gray-100 md:block prd-tag">
                #gambia
              </span>
              <span className="hidden text-gray-600 bg-gray-100 md:block prd-tag">
                #farming
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* What People Are Saying Section */}
      <div className="py-16 mt-32 bg-indigo-100">
        <div className="container px-4 mx-auto">
          <h3 className="mb-3 text-3xl font-extrabold leading-tight text-center">
            What People Are Saying About Mira Farms
          </h3>
          <hr className="w-64 h-1 p-0 m-0 mx-auto mb-10 opacity-25 gradient" />
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 lg:w-1/3">
              <div className="flex -mx-4">
                <div className="px-4 ">
                  <div className="p-4 bg-white rounded-lg shadow">
                    We track everything and constantly wonder about which
                    pricing to test worked, if our churn is good or bad, and if
                    we're spending too much relative to other founders. Maker
                    Metrics helps us answer that quickly. We connected our
                    Stripe and Quickbooks and use the reports weekly!
                  </div>
                  <div className="ml-4 -mt-1">
                    <svg
                      height="20"
                      width="20"
                      viewBox="0, 0, 20, 20"
                      className="text-white"
                    >
                      <polygon
                        points="0,0 20,0 10,20"
                        className="triangle"
                        fill="currentColor"
                      ></polygon>
                    </svg>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex-shrink-0 w-16 text-center">
                      <img
                        className="rounded-full"
                        src="https://1000africanvoices.files.wordpress.com/2019/12/modou-njie.png"
                        alt=""
                      ></img>
                    </div>
                    <p className="ml-2 font-bold">
                      <Link target="_blank" href="https://www.farmfresh.gm/">
                        Modou Njie
                        <br />
                        Founder of FarmFresh
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mt-6 lg:w-1/3 lg:mt-0">
              <div className="flex -mx-4">
                <div className="px-4 ">
                  <div className="p-4 bg-white rounded-lg shadow">
                    We track everything and constantly wonder about which
                    pricing to test worked, if our churn is good or bad, and if
                    we're spending too much relative to other founders. Maker
                    Metrics helps us answer that quickly. We connected our
                    Stripe and Quickbooks and use the reports weekly!
                  </div>
                  <div className="ml-4 -mt-1">
                    <svg
                      height="20"
                      width="20"
                      viewBox="0, 0, 20, 20"
                      className="text-white"
                    >
                      <polygon
                        points="0,0 20,0 10,20"
                        className="triangle"
                        fill="currentColor"
                      ></polygon>
                    </svg>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex-shrink-0 w-16 text-center">
                      <img
                        className="rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      ></img>
                    </div>
                    <p className="ml-2 font-bold ">
                      <Link target="_blank" href="https://www.goreminders.com/">
                        Tapha Ngum
                        <br />
                        Founder of Smiling Coast Produce
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 mt-6 lg:w-1/3 lg:mt-0">
              <div className="flex -mx-4">
                <div className="px-4">
                  <div className="p-4 pt-4 bg-white rounded-lg shadow lg:pb-10">
                    Assessing the health of my many side projects has always
                    been a challenge. I developed Maker Metrics to streamline
                    data collection and analyse important metrics to help me
                    keep my projects on track.
                  </div>
                  <div className="ml-4 -mt-1">
                    <svg
                      height="20"
                      width="20"
                      viewBox="0, 0, 20, 20"
                      className="text-white"
                    >
                      <polygon
                        points="0,0 20,0 10,20"
                        className="triangle"
                        fill="currentColor"
                      ></polygon>
                    </svg>
                  </div>
                  <div className="flex mt-2">
                    <div className="flex-shrink-0 w-16 text-center">
                      <img
                        className="rounded-full"
                        src="https://randomuser.me/api/portraits/men/59.jpg"
                        alt=""
                      ></img>
                    </div>
                    <p className="ml-2 font-bold ">
                      <Link target="_blank" href="https://www.goreminders.com/">
                        Mubashar Iqbal
                        <br />
                        Founder Maker Metrics
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
