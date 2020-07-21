import React from 'react';
import { Link } from 'gatsby';

import Layout from 'src/components/Layout';
import FarmImage from 'src/images/simplicity-farms.jpg';
import SEO from 'src/components/SEO';

const OurFarmPage = () => (
  <Layout>
    <SEO title="Our Farm" />
    <div className="py-12">
      <div className="container py-6">
        <div className="flex flex-col flex-wrap ml-12 sm:flex-row sm:ml-auto">
          <div className="flex flex-col w-full ml-2 nexus:ml-10 md:w-2/3 lg:w-3/4">
            <div className="w-3/4 overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <div className="flex items-center justify-end">
                  <img
                    alt="card img"
                    className="rounded-t"
                    src={FarmImage}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full -ml-6 lg:-ml-24 md:pl-8 md:w-1/3 lg:w-1/3">
            <div className="mt-6 md:mb-6 md:h-32 md:mt-0">
              <h2
                className="text-4xl text-center text-black md:ml-2 md:text-black"
                itemprop="name"
              >
                Simplicity Farm
              </h2>
              <div className="w-full py-6 mt-12 text-center md:ml-4 lg:ml-auto">
                <Link
                  to=""
                  rel="nofollow"
                  className="inline-block px-4 py-3 text-sm font-bold text-center text-white uppercase transition rounded-full shadow hover:no-underline md:w-full lg:w-1/2 flex-no-shrink bg-orange hover:bg-orange-dark hover:-translateY-sm hover:shadow"
                  data-event="ClickVisit"
                >
                  Locate Farm
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap pt-12">
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="mb-8">
              <h4 className="mb-4 text-lg text-black">Description</h4>
              <div
                className="p-4 leading-normal text-black bg-white rounded-lg shadow"
                itemprop="description"
              >
                Personal Website of Simplicity Farms
              </div>
            </div>
            <div className="mb-4">
              <h4 className="mb-4 text-lg text-black">Owner</h4>
              <div className="flex items-center mb-3">
                <span className="text-sm text-black" itemprop="author">
                  Simplicity Farms
                </span>
              </div>
              <div className="flex items-center mb-3"></div>
              <div className="flex items-center mb-3"></div>
            </div>
          </div>
          <div className="flex flex-col w-full md:pl-8 md:w-1/3 lg:w-1/4">
            <div className="block mb-4 text-lg">&nbsp;</div>
            <a
              href="https://twitter.com/SimplicityFarmsTheme"
              rel="nofollow"
              target="_blank"
              className="flex items-center px-3 py-2 mb-6 no-underline transition bg-white rounded-lg shadow-lg hover:shadow hover:-translateY-sm hover:no-underline"
            >
              <span className="inline-flex p-1 -mr-10 text-xl lg:text-3xl">
                <svg
                  className="w-1/3 text-blue-600 svg-icon"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g fill="currentColor">
                      <path d="M19.9554745,3.91978102 C19.2212409,4.24540146 18.4321898,4.46547445 17.6040146,4.56445255 C18.4493431,4.05773723 19.0984672,3.25540146 19.4041606,2.29941606 C18.6131387,2.76854015 17.7369343,3.10927007 16.8043796,3.29291971 C16.0575182,2.49722628 14.9935036,2 13.8159854,2 C11.5548905,2 9.72175182,3.83306569 9.72175182,6.0940146 C9.72175182,6.41489051 9.7580292,6.72737226 9.82781022,7.0270073 C6.42518248,6.85627737 3.40846715,5.22635036 1.38919708,2.74941606 C1.03678832,3.35408759 0.834890511,4.05737226 0.834890511,4.80766423 C0.834890511,6.2280292 1.55773723,7.48116788 2.65627737,8.21532847 C1.98510949,8.19408759 1.35386861,8.00992701 0.801824818,7.70328467 C0.801532847,7.72036496 0.801532847,7.73751825 0.801532847,7.75474453 C0.801532847,9.73839416 2.21277372,11.3931387 4.08569343,11.7691971 C3.74211679,11.8627737 3.38043796,11.9127737 3.0070073,11.9127737 C2.74321168,11.9127737 2.48671533,11.8871533 2.23678832,11.8393431 C2.75773723,13.4659124 4.26970803,14.649562 6.06124088,14.6826277 C4.66007299,15.7806569 2.89474453,16.4351825 0.976642336,16.4351825 C0.64620438,16.4351825 0.320291971,16.4158394 0,16.3780292 C1.81182482,17.539635 3.96386861,18.2173723 6.27591241,18.2173723 C13.8064234,18.2173723 17.9243796,11.9789051 17.9243796,6.56875912 C17.9243796,6.39124088 17.920438,6.21467153 17.9125547,6.03912409 C18.7124088,5.46189781 19.4065693,4.74080292 19.9554745,3.91978102"></path>
                    </g>
                  </g>
                </svg>
              </span>
              <div className="flex flex-col w-full-12">
                <span
                  className="mb-1 text-xs font-bold uppercase text-grey-darker"
                  aria-hidden="true"
                >
                  Twitter
                </span>
                <span className="text-sm font-bold text-black truncate">
                  SimplicityFarmsLtd
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default OurFarmPage;
