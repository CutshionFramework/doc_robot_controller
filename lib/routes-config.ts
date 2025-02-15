// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: 'Getting Started',
    href: 'getting-started',
    items: [
      { title: 'Introduction', href: '/introduction' },
      { title: 'Operation Process', href: '/operation-process' },
      // {title: "Quick Start Guide", href: "/quick-start-guide"},
      // { title: 'Project Structure', href: '/project-structure' },
      // {title: "Changelog", href: "/changelog"},
      // {title: "FAQ", href: "/faq"},
    ],
  },
  {
    title: 'Usages',
    href: 'usages',
    items: [
      {
        title: 'Local Installation',
        href: '/local-installation',
      },
      { title: 'Prerequisites', href: '/prerequisites' },
    ],
  },
  // {
  //   title: "Online",
  //   href: "online",
  //   items: [
  //     // {title: "useFetch", href: "/use-fetch"},
  //     // {title: "useAuth", href: "/use-auth"},
  //     // {title: "useProduct", href: "/use-product"},
  //     // {title: "useOrder", href: "/use-order"},
  //     // {title: "useCart", href: "/use-cart"},
  //     // {title: "usePayment", href: "/use-payment"},
  //     // {title: "useShipping", href: "/use-shipping"},
  //     // {title: "useNotification", href: "/use-notification"},
  //     // {title: "useReview", href: "/use-review"},
  //     // {title: "useInventory", href: "/use-inventory"},
  //     // {title: "useUser", href: "/use-user"},
  //     // {title: "useSettings", href: "/use-settings"},
  //     // {title: "useSession", href: "/use-session"},
  //     // {title: "useTheme", href: "/use-theme"},
  //     // {title: "useRouter", href: "/use-router"},
  //     // {title: "useData", href: "/use-data"},
  //   ],
  // },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items
    .map((link) => {
      return {
        title: link.title,
        href: href + link.href,
      };
    })
    .flat();
}).flat();
