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
          @{new Date().getFullYear()} <span>Moonex</span>. All Rights Reserved.{" "}
          <br />
          Development by{" "}
          <span>
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              ib-themes
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
