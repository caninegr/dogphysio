import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "Αρχικη",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    routerPath: "/",
  },
  {
    name: "Υπηρεσιες",
    activeClass: "",
    menuClass: "",
    routerPath: "/service",
    },
  {
    name: "Αρθρα",
    activeClass: "",
    menuClass: "",
    routerPath: "/blog-masonry",
  },
  {
    name: "Αλλα",
    activeClass: "",
    menuClass: "two-columns",
    dropDownItems: [
      {
        name: "Η Ομάδα",
        routerPath: "/team",
      },
      {
        name: "Συχνές Ερωτήσεις",
        routerPath: "/faq",
      },
      {
        name: "Επικοινωνία",
        routerPath: "/contact",
      },
      {
        name: "Εθελοντές",
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
