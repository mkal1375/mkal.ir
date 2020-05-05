module.exports = {
  siteMetadata: {
    title: `مهدی کلهر`,
    description: `وبسایت شخصی مهدی کلهر علاقه‌مند و توسعه دهنده نرم‌افزار`,
    author: `مهدی کلهر`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `وبسایت مهدی کلهر`,
        short_name: `مهدی کلهر`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `src/assets/images/me.jpg`,
      },
    },
  ],
}
