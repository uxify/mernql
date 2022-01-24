import { layouts } from './layouts.js'

export const pages = [
  {
    id: 1,
    title: "Home",
    description: "Home Page",
    url: "/",
    layout: layouts[0],
    pageContent: [
      {
        id: 1,
        name: 'RowContent',
        contentId: [1]
      },
      {
        id: 2,
        name: 'RowContent',
        contentId: [2, 3]
      }
    ]
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