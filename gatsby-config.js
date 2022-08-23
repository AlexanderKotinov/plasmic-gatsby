module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: '@plasmicapp/loader-gatsby',
      options: {
        projects: [
          {
            id: 'JDgDoF4f3aETGTknV7Myf', // ID of a project you are using
            token: 'mfKxMEiwaNrRn99nwjLn063wRGRsWxGYKcDDhLP5mRvwU0SMwoMTHMVuzryVUjPwfMOojmP9uu0AMR6FfHtA' // API token for that project
          }
        ],
        // Fetches the latest revisions, whether or not they were unpublished!
        // Disable for production to ensure you render only published changes.
        preview: true,
        defaultPlasmicPage: require.resolve('./src/templates/defaultPlasmicPage.tsx'),
        // Optionally specify pages to ignore.
        ignorePaths: ['/my-page']
      }
    }
  ],
}
