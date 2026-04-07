export type MenuInnerItem = { link: string; title: string };

export type MenuSubItem = {
  link: string;
  title: string;
  has_inner_dropdown?: boolean;
  inner_submenu?: MenuInnerItem[];
};

export type MenuItem = {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: MenuSubItem[];
};

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About us",
    link: "/about-us",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
    has_dropdown: false,
    sub_menus: [
      { link: "#", title: "Sanctuary Hive by Prestige One" },
      { link: "/projects/sanctuary", title: "Sanctuary by Prestige One" },
      { link: "/projects/hilton-residences-dubai-maritime-city", title: "Hilton Residences Dubai Maritime City" },
      { link: "/projects/berkeley-square-north", title: "Berkeley Square North" },
      { link: "/projects/berkeley-square-south", title: "Berkeley Square South" },
      { link: "/projects/luxury-canal-residences", title: "Luxury Canal Residences" },
      { link: "#", title: "Coastal Haven" },
      { link: "#", title: "The Boulevard" },
      { link: "#", title: "Parkway" },
      { link: "#", title: "Place" },
      { link: "#", title: "The One" },
      { link: "#", title: "Seaside" },
      { link: "#", title: "The Waterway" },
      { link: "#", title: "Vista" },
      { link: "#", title: "The Residence" },
      { link: "#", title: "Luxe Villa" },
      { link: "#", title: "Seascape Villa" },
    ],
  },
  {
    id: 4,
    title: "Destinations",
    link: "/our-destinations",
    has_dropdown: true,
    sub_menus: [
      { link: "/our-destinations/dubai-maritime-city", title: "Dubai Maritime City", }, 
      { link: "/our-destinations/barsha-heights", title: "Barsha Heights", }, 
      { link: "/our-destinations/dubai-islands", title: "Dubai Islands", }, 
      { link: "/our-destinations/jumeirah-village-circle", title: "Jumeirah Village Circle", }, 
      { link: "/our-destinations/dubai-sports-city", title: "Dubai Sports City", }, 
      { link: "/our-destinations/palm-jumeirah", title: "Palm Jumeirah", }, 
      { link: "/our-destinations/mohammed-bin-rashid-city", title: "Mohammed Bin Rashid City", }, 
    ]
  },
  {
    id: 5,
    title: "Virtual Tour",
    link: "/virtual-tour",
    has_dropdown: false,
  },

]

export default menu_data
