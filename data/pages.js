import { layouts } from './layouts.js'

export const pages = [
  {
    id: 1,
    title: "Home",
    description: "Home Page",
    url: "/",
    layout: layouts[0],
    pageContent: {
      pageType: 'a',
      layout: 'full',
      contentSection: [
        {
          id: 1,
          type: 'HomeBanner',
          content: {
            id: 1,
            name: 'HomeBanner',
            slides: [
              {
                id: 1,
                imgUrl: 'https://i.natgeofe.com/n/7bce4c9c-a0d4-4fa0-96ea-4c8f1f2fa69f/GettyImages-1227904491.jpg?w=1920&h=1080',
                headline1: "Returning to outdoor competition",
                headline2: "",
                textContent: "Guidelines to be strictly followed for members who wish to return to the competition.",
                callToAction: "Covid-19 Guidelines"
              }
            ]
          }
        },
        {
          id: 2,
          type: 'AnnouncementList'
        }
      ]
    }
  },
  {
    id: 2,
    title: "About",
    description: "About Page",
    url: "/about",
    layout: layouts[1],
    pageContent: {
      pageType: 'a',
      layout: 'full',
      contentSection: [{}, {}]
    }
  },
  {
    id: 3,
    title: "Contact",
    description: "Contact Page",
    url: "/contact",
    layout: layouts[1],
    pageContent: {
      pageType: 'a',
      layout: 'full',
      contentSection: [{}, {}]
    }
  },
  {
    id: 4,
    title: "Blog",
    description: "Blog Page",
    url: "/blog",
    layout: layouts[1],
    pageContent: {
      pageType: 'a',
      layout: 'full',
      contentSection: [{}, {}]
    }
  }
]