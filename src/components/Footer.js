import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';

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
        <span className="flex justify-center mt-4 text-xs italic sm:mt-0 sm:justify-start">
          Made In A Laptop
          <img
            className="w-6 ml-2"
            alt="A Laptop"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0i0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTI2LDk0SDExNS42N2E1Ljk0LDUuOTQsMCwwLDAsLjMzLTEuOTRWMjcuOTRBNiw2LDAsMCwwLDExMC4wNiwyMkgxNy45NEE2LDYsMCwwLDAsMTIsMjcuOTRWOTIuMDZBNS45NCw1Ljk0LDAsMCwwLDEyLjMzLDk0SDJhMiwyLDAsMCwwLTIsMnYuNUMwLDEwMSwzLjYzLDEwNiw4LjUsMTA2aDExMWM0Ljg3LDAsOC41LTUsOC41LTkuNVY5NkEyLDIsMCwwLDAsMTI2LDk0Wk0xNiw5Mi4wNlYyNy45NEExLjk0LDEuOTQsMCwwLDEsMTcuOTQsMjZoOTIuMTJBMS45NCwxLjk0LDAsMCwxLDExMiwyNy45NFY5Mi4wNkExLjk0LDEuOTQsMCwwLDEsMTEwLjA2LDk0SDE3Ljk0QTEuOTQsMS45NCwwLDAsMSwxNiw5Mi4wNlpNMTE5LjUsMTAySDguNWMtMS45NSwwLTMuNjctMi00LjI3LTRIMTIzLjc3QzEyMy4xNywxMDAuMDUsMTIxLjQ1LDEwMiwxMTkuNSwxMDJaIi8+PHBhdGggZD0iTTg0LDcwLjE1cy01LjI3LTIuNC01LjI3LTcuNjNhOC4yNCw4LjI0LDAsMCwxLDQtNi44NSwyLDIsMCwwLDAsLjczLTIuODZBMTUuMjIsMTUuMjIsMCwwLDAsODEsNTBjLTIuNC0yLTYuNi0yLjU5LTguNy0yLjU5YTE4LjMyLDE4LjMyLDAsMCwwLTUuODksMS41MywxOC43NSwxOC43NSwwLDAsMS0xLjkzLjY4Yy0uMjktLjA3LS45Mi0uMjktMS40NS0uNDdDNjAuNTMsNDguMjcsNTYuNzYsNDcsNTMuMjUsNDgsNDQuNDMsNTAuNjgsNDMsNTkuMjQsNDIuODMsNjIuOGMtLjMsNS42Myw0LjExLDE0LjkxLDUuNSwxN2wuMjkuNDRjMS41NSwyLjMxLDMuNjYsNS40Niw3LjczLDUuNzhsLjc0LDBBMTMuNDgsMTMuNDgsMCwwLDAsNjIsODQuOTFhOS4xLDkuMSwwLDAsMSwzLS43Niw5LjUxLDkuNTEsMCwwLDEsMy4xOS43N0ExNC4xMywxNC4xMywwLDAsMCw3My4wNyw4NmMzLjM5LDAsNS43Mi0yLjkxLDcuMjYtNC44My4zNC0uNDMuNjYtLjgzLjg3LTEsMS40OS0xLjQ5LDMuMzItNiwzLjg1LTcuNDFBMiwyLDAsMCwwLDg0LDcwLjE1Wm0tNS42MSw3LjEzYTE2LjYzLDE2LjYzLDAsMCwwLTEuMTcsMS4zN0M3Ni4xNSw4MCw3NC41NCw4Miw3My4wNyw4MmExMC4xNCwxMC4xNCwwLDAsMS0zLjU1LS44MywxMywxMywwLDAsMC00LjU0LTEsMTIuNywxMi43LDAsMCwwLTQuNDEsMSw5LDksMCwwLDEtMy45MS44MmMtMi0uMTUtMy4xNi0xLjY5LTQuNzEtNGwtLjMxLS40NmMtMS4zMy0yLTUtMTAuMzQtNC44MS0xNC40OUM0Nyw2MC4zLDQ4LDUzLjc4LDU0LjQxLDUxLjg1YTUuNTEsNS41MSwwLDAsMSwxLjY0LS4yMywxOC4yMiwxOC4yMiwwLDAsMSw1LjY1LDEuMyw5LDksMCwwLDAsMi43Ni43MSwxMC42MSwxMC42MSwwLDAsMCwzLjM3LTEsMTYuMTEsMTYuMTEsMCwwLDEsNC40Ni0xLjI3YzIsMCw0LjkuNjEsNi4xLDEuNjQuMTkuMTYuMzcuMzMuNTQuNWExMS43OSwxMS43OSwwLDAsMC00LjIxLDljMCw1LjUzLDMuNyw4LjgzLDYsMTAuMzJBMjEuNzQsMjEuNzQsMCwwLDEsNzguMzgsNzcuMjhaIi8+PHBhdGggZD0iTTY0LjA5LDQ2LjY1cy4yMywwLC41NCwwYTkuNyw5LjcsMCwwLDAsNy43NC00LjE0LDExLjQ1LDExLjQ1LDAsMCwwLDIuNDktNy43NiwyLDIsMCwwLDAtLjc1LTEuMzRBMiwyLDAsMCwwLDcyLjYzLDMzYTEzLjgyLDEzLjgyLDAsMCwwLTcuMzIsMy41NmMtMy4xMywzLjEzLTMsOC0zLDguMTZBMiwyLDAsMCwwLDY0LjA5LDQ2LjY1Wm00LTcuMjVhOC4wOCw4LjA4LDAsMCwxLDIuMjktMS41Nyw5LjUyLDkuNTIsMCwwLDEtMS4yNiwyLjMsNi41MSw2LjUxLDAsMCwxLTIuNTQsMi4wOUE2LjE5LDYuMTksMCwwLDEsNjguMTQsMzkuNFoiLz48L3N2Zz4="
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
  companyName: PropTypes.string,
};

Footer.defaultProps = {
  companyName: ``,
};

export default Footer;
