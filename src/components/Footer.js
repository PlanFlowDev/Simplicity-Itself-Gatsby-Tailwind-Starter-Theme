import miraLogo from '../images/Mira.png';
// import { graphql, useStaticQuery, Link } from "gatsby";
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';
//import React, { useState } from "react"

const Footer = ({ companyName }) => (
  <footer className="w-full px-4 py-6 shadow-sm bg-beige">
    <div className="px-4 pt-3 pb-4 -mx-4 border-b-2 border-gray-400">
      <div className="flex flex-col justify-center px-4 mx-auto ml-1 sm:justify-start sm:ml-20 sm:px-0">
        <h2 className="inline-block text-xl font-semibold text-center text-gray-800 sm:text-left">
          Join Our Facebook Group
        </h2>
        <p className="pl-px text-xs text-center text-gray-700 sm:text-left">
          Latest news, articles and updates delivered directly to you.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center justify-between mx-16 my-4 ml-20 sm:flex-row">
      <p className="pt-6">
        <span className="mr-6 text-sm text-center sm:mr-0 sm:text-base">
          © {companyName}, {new Date().getFullYear()}.{' '}
        </span>
        <span className="flex mt-4 text-xs italic sm:mt-0">
          Made In The Gambia
          <img
            className="w-6 ml-2"
            alt="The Gambia"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNCRDFGMzQ7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQoJLnN0MntmaWxsOiMyRTJEODA7fQoJLnN0M3tmaWxsOiM0QTc5Mzk7fQo8L3N0eWxlPjxnIGlkPSJYTUxJRF8xXyI+PHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSI5OS42IiBpZD0iWE1MSURfNV8iIHdpZHRoPSI1MTIiIHk9IjEwNi43Ii8+PHJlY3QgY2xhc3M9InN0MSIgaGVpZ2h0PSI5OS42IiBpZD0iWE1MSURfNF8iIHdpZHRoPSI1MTIiIHk9IjIwNi4yIi8+PHJlY3QgY2xhc3M9InN0MiIgaGVpZ2h0PSI2Ni40IiBpZD0iWE1MSURfM18iIHdpZHRoPSI1MTIiIHk9IjIyMi44Ii8+PHJlY3QgY2xhc3M9InN0MyIgaGVpZ2h0PSI5OS41IiBpZD0iWE1MSURfMl8iIHdpZHRoPSI1MTIiIHk9IjMwNS44Ii8+PC9nPjwvc3ZnPg=="
          ></img>
        </span>
      </p>
      <div className="flex items-center">
        <Link href="#">
          <svg
            className="w-6 h-6 mr-6 fill-current text-primary hover:text-secondary"
            viewBox="0 0 512 512"
          >
            <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
          </svg>
        </Link>
        <Link href="#">
          <svg
            fill="none"
            className="w-6 h-6 mr-6 text-primary hover:text-secondary"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </Link>
        <Link href="#">
          <svg
            className="w-6 h-6 mr-6 fill-current text-primary hover:text-secondary"
            viewBox="0 0 512 512"
          >
            <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
          </svg>
        </Link>
        <Link href="#">
          <svg
            className="w-6 h-6 mr-6 fill-current text-primary hover:text-secondary"
            viewBox="0 0 512 512"
          >
            <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
          </svg>
        </Link>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
