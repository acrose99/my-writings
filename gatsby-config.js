require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  pathPrefix: "/my-writings",
  siteMetadata: {
    siteTitle: `Alex Rose`,
    siteTitleAlt: `Alex Rose`,
    siteHeadline: `Alex Rose`,
    siteUrl: `https://acrose99.github.io`,
    siteDescription: `Alex writes about things`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@AlexRose`,
  }
  ,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Writings`,
            slug: `/blog`,
          },
          {
            title: `What is this?`,
            slug: `/about`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex's Writings`,
        short_name: `Alex's Writings`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/favicon.ico`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicon.ico`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
