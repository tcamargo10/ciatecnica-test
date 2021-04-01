import React from "react";
import CIcon from "@coreui/icons-react";

const NavItems = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: (
      <>
        <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
      </>
    ),
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["MENU"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Users",
    to: "/users?page=1",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default NavItems;
