import React from 'react';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import TestImage1 from 'src/images/test-image-1.jpg';
import TestImage2 from 'src/images/test-image-2.jpg';
import TestImage3 from 'src/images/test-image-3.jpg';
import FarmProduct1 from 'src/images/farm-product-1.jpg';
import FarmProduct2 from 'src/images/farm-product-2.jpg';
import StripeImage1 from 'src/images/logo-stripe.png';
import SEO from 'src/components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Our Products" />

    <div className="max-w-6xl p-2 mt-4 sm:m-auto sm:p-12">
      {/* Our Products Section */}
      <div className="container pt-2 pb-6 mx-auto mt-2 border-b-4 sm:block">
        <h1 className="py-4 text-center font-slim text-brown">Our Products</h1>
        <div className="flex flex-wrap justify-center px-6 my-4 md:flex-row sm:w-auto">
          {/* Products Here*/}
          <div className="product sm:max-w-sm">
            <img
              className="w-full"
              src={FarmProduct2}
              alt="Plate of rice"
            ></img>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                Simplicity Farms Original Rice
              </div>
              <p className="mb-4 text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button className="flex px-4 py-2 mb-3 ml-6 text-sm font-bold text-white rounded shadow-sm sm:text-base bg-orange hover:bg-orange-dark">
              Buy With Stripe
              <img className="w-6 ml-3 shadow-sm" src={StripeImage1}></img>
            </button>
            <div className="flex flex-col px-6 py-4 sm:flex-row">
              <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-primary sm:mb-0">
                $1,250
              </span>
              <span className="w-20 mr-2 text-white sm:w-auto prd-tag bg-brown-light">
                25KG
              </span>
              <span className="hidden mr-2 text-gray-600 bg-gray-100 md:block prd-tag">
                #organic
              </span>
              <span className="hidden text-gray-600 bg-gray-100 md:block prd-tag">
                #farming
              </span>
            </div>
          </div>
          <div className="product sm:max-w-sm">
            <img
              className="w-full"
              src={FarmProduct2}
              alt="Plate of rice"
            ></img>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                Simplicity Farms Original Rice
              </div>
              <p className="mb-4 text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <button className="flex px-4 py-2 mb-3 ml-6 text-sm font-bold text-white rounded shadow-sm sm:text-base bg-orange hover:bg-orange-dark">
              Buy With Stripe
              <img className="w-6 ml-3 shadow-sm" src={StripeImage1}></img>
            </button>
            <div className="flex flex-col px-6 py-4 sm:flex-row">
              <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-primary sm:mb-0">
                $2,500
              </span>
              <span className="w-20 mr-2 text-white sm:w-auto prd-tag bg-brown-light">
                50KG
              </span>
              <span className="hidden mr-2 text-gray-600 bg-gray-100 md:block prd-tag">
                #organic
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
            What People Are Saying About Simplicity Farms
          </h3>
          <hr className="w-64 h-1 p-0 m-0 mx-auto mb-10 opacity-25 gradient" />
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 lg:w-1/3">
              <div className="flex -mx-4">
                <div className="px-4 ">
                  <div className="p-4 bg-white rounded-lg shadow">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
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
                        src={TestImage1}
                        alt=""
                      ></img>
                    </div>
                    <p className="ml-2 font-bold">
                      <Link target="_blank" href="https://www.example.com/">
                        Bob James
                        <br />
                        Founder of OrgFarm
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
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
                        src={TestImage2}
                        alt=""
                      ></img>
                    </div>
                    <p className="ml-2 font-bold ">
                      <Link target="_blank" href="https://www.example.com/">
                        Arnaud Pencis
                        <br />
                        Founder of Y-Produce
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
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
                        src={TestImage3}
                        alt=""
                      ></img>
                    </div>
                    <p className="ml-2 font-bold ">
                      <Link target="_blank" href="https://www.goreminders.com/">
                        Lacey Turner
                        <br />
                        Founder of Ton Farms
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
