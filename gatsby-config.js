module.exports = {
  siteMetadata: {
    title: 'Simplicity Itself',
    description: 'A Simple, Free Gatsby/TailwindCSS Starter Theme For Business Websites',
    author: 'PlanFlow.dev',
    company: '<ADD YOUR COMPANY NAME HERE>',
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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
