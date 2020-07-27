module.exports = {
  siteMetadata: {
    title: 'Simplicity Itself',
    description: 'A Simple, Free Gatsby/TailwindCSS Starter Theme For Business Websites',
    author: 'https://PlanFlow.dev',
    company: 'Your Company Name Here',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-background-image-es5',
    //   options: {
    //     // add your own characters to escape, replacing the default ':/'
    //     specialChars: '/:',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-tailwind-simplicity-theme',
        short_name: 'simplicity-itself',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#5D9D0E',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
