import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../social/Social";

const menuContent = [
  {
    name: "Αρχική",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    routerPath: "/",
  },
  {
    name: "Υπηρεσίες",
    activeClass: "",
    menuClass: "",
    routerPath: "/service",
  },
  {
    name: "Άρθρα",
    activeClass: "",
    menuClass: "",
    routerPath: "/blog-masonry",
  },
  {
    name: "Άλλα",
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

const MobileMenu2 = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <div key={i}>
                  {item.routerPath ? (
                    <>
                      <MenuItem>
                        <Link className="singleMenu" to={item.routerPath}>
                          {item.name}
                        </Link>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      {" "}
                      <SubMenu title={item.name}>
                        {item.dropDownItems.map((val, i) => (
                          <MenuItem key={i}>
                            <Link to={val.routerPath}>{val.name}</Link>
                          </MenuItem>
                        ))}
                      </SubMenu>
                    </>
                  )}
                </div>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>DogPhysio</span>. All Rights Reserved.{" "}
          <br />
          Development by{" "}
          <span>
            <a
              href="https://cane.gr"
              target="_blank"
              rel="noopener noreferrer"
            >
              cane sentio
            </a>
          </span>
          .
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu2;
