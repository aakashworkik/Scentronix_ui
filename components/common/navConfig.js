// Desktop top Nav Items
export const navItems = [
  { name: 'SHOP', matchPath: '/shop' },
  { name: 'RECIPES', matchPath: '/recipe' },
  { name: 'LEARN', matchPath: '/learn' },
  { name: 'ABOUT', matchPath: '/about' },
  { name: 'BLOG', matchPath: '/blog' },
]

export const mobileNavItems = [
  { name: 'SHOP', matchPath: '/shop' },
  { name: 'RECIPES', matchPath: '/recipe' },
  { name: 'LEARN', matchPath: '/learn' },
  { name: 'ABOUT', matchPath: '/about' },
  { name: 'BLOG', matchPath: '/blog' },
  {
    name: 'CATEGORY',
    matchPath: '/category',
    subItems: [
      {
        name: 'Whole Grain Banana Bread',
        slug: 'whole-grain-banana-bread',
      },
      {
        name: 'Cheesy Vegetable Lasagna In A Skillet',
        slug: 'cheesy-vegetable-lasagna-in-a-skillet',
      },
    ],
  },
  { name: 'COLLECTION', matchPath: '/collection' },
  { name: 'RESOURCES', matchPath: '/resources' },
]

export const subNav = [
  {
    name: 'CATEGORIES',
    url: '',
    subItems: [
      {
        name: 'Whole Grain Banana Bread',
        slug: 'whole-grain-banana-bread',
      },
      {
        name: 'Cheesy Vegetable Lasagna In A Skillet',
        slug: 'cheesy-vegetable-lasagna-in-a-skillet',
      },
    ],
  },
  { name: 'COLLECTIONS', url: '', subItems: [] },
  { name: 'RESOURCES', url: '', subItems: [] },
]