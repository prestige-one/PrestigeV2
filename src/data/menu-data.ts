
const menu_data = [
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
    /*sub_menus: [
      { link: "/portfolio", title: "Portfolio", }, 
      { link: "/portfolio-details", title: "Portfolio Details", }, 
    ]*/
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

]

export default menu_data