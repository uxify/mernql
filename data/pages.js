import { layouts } from './layouts.js'

export const pages = [
  {
    id: 1,
    title: "Home",
    description: "Home Page",
    url: "/",
    layout: layouts[0]
  },
  {
    id: 2,
    title: "About",
    description: "About Page",
    url: "/about",
    layout: layouts[1]
  },
  {
    id: 3,
    title: "Contact",
    description: "Contact Page",
    url: "/contact",
    layout: layouts[1]
  },
  {
    id: 4,
    title: "Blog",
    description: "Blog Page",
    url: "/blog",
    layout: layouts[1]
  }
]