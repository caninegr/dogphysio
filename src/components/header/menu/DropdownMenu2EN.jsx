import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    routerPath: "/en/",
  },
  {
    name: "Services",
    activeClass: "",
    menuClass: "",
    routerPath: "/serviceEN",
    },
  {
    name: "Blog",
    activeClass: "",
    menuClass: "",
    routerPath: "/blog-masonry",
  },
  {
    name: "Pages",
    activeClass: "",
    menuClass: "two-columns",
    dropDownItems: [
      {
        name: "Team",
        routerPath: "/teamEN",
      },
      {
        name: "FAQ",
        routerPath: "/faqEN",
      },
      {
        name: "Contact",
        routerPath: "/contactEN",
      },
      {
        name: "Volunteer",
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
