module.exports = {
  siteMetadata: {
    title: 'KS INSTITUTE - Spoken english classes in Pune. IELTS, PTE, TOEFL',
    author: 'Gagan Daga',
    description: 'Best IELTS, PTE, spoken english classes in Pune. We offer english tuitions,competitive exams coaching including Ielts Pte Toefl and more! ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
