const siteMetadata = {
  title: 'Portfolio | GPL Gowtham chand',
  author: 'Gaduthuri Pradeep lal gowtham chand',
  headerTitle: 'My things',
  description: 'My personal portfolio where I share my musings',
  snippets: 'Reuseable code snippets collected by Gowtham',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'http://localhost:3000/',
  siteRepo: '#',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/insta-card.png',
  email: 'gpl.gowthamchand@gmail.com',
  github: 'https://github.com/gpl-gowthamchand/',
  linkedin: 'https://www.linkedin.com/in/gplgowthamchand/',
  website: '#',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '', // e.g. #
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-F6V2QTJ628', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    linkedin: 'gplgowthamchand',
  },
}

module.exports = siteMetadata
