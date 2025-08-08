export interface MenuItem {
  label: string;
  href: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Product For Sale", href: "/manufacturing/product" },
  { label: "Manufacturing Companies", href: "/manufacturing/businesses" },
  { label: "Articles", href: "/manufacturing/article" },
  { label: "Digital Catalogue", href: "/manufacturing/digital" },
  { label: "Special", href: "/manufacturing/special" },
  { label: "List Your Business", href: "/manufacturing/list-business" },
  { label: "Jobs", href: "/manufacturing/jobs" },
  { label: "Tenders", href: "/manufacturing/tenders" },
  { label: "Contact", href: "/manufacturing/contact" },
  { label: "About", href: "/manufacturing/about" },
];