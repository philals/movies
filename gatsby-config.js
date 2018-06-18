module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-trello',
      options: {
        teamId: `5ab0cdc0bdd997432dc47f8f`,
        apiKey: `4a2687c32dd289232c05c4a689a3482c`,
        secret: `66bb7bb6b7409b49e578a88e68af4ae9eba127557f4adfbadc61afcd4fecb7b8`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-59780402-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      }
    }
  ]
};
