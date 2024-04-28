import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    routerPath: "/",
  },
  {
    name: "Services",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Works Grid",
        routerPath: "/works-grid",
      },
      {
        name: "Works Masonry",
        routerPath: "/works-masonry",
      },
      {
        name: "Works Listing",
        routerPath: "/works-listing",
      },
      {
        name: "Works Carousel",
        routerPath: "/works-carousel",
      },
      {
        name: "Works Showcase",
        routerPath: "/works-showcase",
      },
    ],
  },
  {
    name: "Blog",
    activeClass: "",
    menuClass: "",
    routerPath: "/blog-masonry",
  },
  {
    name: "Contact",
    activeClass: "",
    menuClass: "",
    routerPath: "/contact",
  },
  {
    name: "Gallery",
    activeClass: "",
    menuClass: "two-columns",
    dropDownItems: [
      {
        name: "About Us",
        routerPath: "/about-us",
      },
      {
        name: "About Me",
        routerPath: "/about-me",
      },
      {
        name: "Services",
        routerPath: "/service",
      },
      {
        name: "Service Details",
        routerPath: "/service-details",
      },
      {
        name: "Pricing",
        routerPath: "/pricing",
      },
      {
        name: "Team",
        routerPath: "/team",
      },
      {
        name: "FAQ",
        routerPath: "/faq",
      },
      {
        name: "Contact",
        routerPath: "/contact",
      },
      {
        name: "Page 404",
        routerPath: "/404",
      },
      {
        name: "Coming Soon",
        routerPath: "/coming-soon",
      },
    ],
  },
];

const DropdownMenu2 = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li
          className={`${!item.routerPath ? "menu-item-has-children" : ""} ${
            item.menuClass
          }`}
          key={i}
        >
          {item.routerPath ? (
            <Link to={item.routerPath}>{item.name}</Link>
          ) : (
            <a href="#" className={item.activeClass}>
              <span>{item.name}</span>
            </a>
          )}
          {item.dropDownItems && (
            <ul className="sub-menu mega">
              {item.dropDownItems?.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath}>
                    {" "}
                    <span>{val.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu2;
