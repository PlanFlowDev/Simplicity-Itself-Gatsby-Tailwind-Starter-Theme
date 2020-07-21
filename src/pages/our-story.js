import React from 'react';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import FarmImage from 'src/images/simplicity-farms.jpg';
import SEO from 'src/components/SEO';

const OurStoryPage = () => (
  <Layout>
    <SEO title="Our Story" />
    <div className="flex flex-col mt-16 -mx-8 justify-left">
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 text-xl font-semibold leading-snug tracking-tight text-justify md:text-xl">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            An Idea Is Born
          </h1>

          <time
            datetime="2017-09-01"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            April 2018
          </time>

          <p className="mt-8 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap lg:justify-left pl-4">
        <Link class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Burris Custom Turrets"
          to="/brands/burris/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Burris Custom Turrets"
              src={FarmImage}
            ></img>
            <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Burris</h2>
          </div>
        </Link>
        <Link class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Bushnell Custom Turrets"
          to="/brands/bushnell/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Bushnell Custom Turrets"
              src={FarmImage}
            ></img>
            <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Bushnell</h2>
          </div>
        </Link>
        <Link class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Kahles Custom Turrets"
          to="/brands/kahles/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Kahles Custom Turrets"
              src={FarmImage}
            ></img>
            <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Kahles</h2>
          </div>
        </Link>
        <Link class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Leupold Custom Turrets"
          to="/brands/leupold/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Leupold Custom Turrets"
              src={FarmImage}
            ></img>
            <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Leupold</h2>
          </div>
        </Link>
      </div>
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            A Company Is Born
          </h1>

          <time
            datetime="2018-03-01"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            May 2018
          </time>

          <p className="mt-8 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap lg:justify-left">
        <Link class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Burris Custom Turrets"
          to="/brands/burris/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Burris Custom Turrets"
              src={FarmImage}
            ></img>
            <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Burris</h2>
          </div>
        </Link>
        <Link class="hover:no-underline w-1/4 sm:w-1/2 lg:w-1/4 mb-6"
          title="Bushnell Custom Turrets"
          to="/brands/bushnell/scopes"
        >
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <img class="rounded sm:h-32 w-3/4 sm:w-full mx-auto"
              alt="Bushnell Custom Turrets"
              src={FarmImage}
            ></img>
            <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Bushnell</h2>
          </div>
        </Link>
      </div>
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            A Farm Comes Into Life
          </h1>

          <time
            datetime="2018-05-01"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            Jan 2019
          </time>

          <p className="mt-8 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
          </p>
        </div>
      </div>
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            A Farm Is Funded
          </h1>

          <time
            datetime="2018-12-31"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            July 2020
          </time>

          <p className="mt-8 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
          </p>
        </div>
      </div>
      <div className="story-section">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-gray-300 border-dashed"></div>

        <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
          <h1 className="text-4xl font-bold leading-none text-brown md:text-5xl lg:text-6xl ">
            Growth
          </h1>

          <time
            datetime="2019-11-18"
            className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
          >
            July 2020
          </time>

          <p className="mt-8 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default OurStoryPage;
