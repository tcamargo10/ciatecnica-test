import React from "react";
import CIcon from "@coreui/icons-react";

const NavItems = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: (
      <>
        <i class="cil-speedometer" style={{ fontSize: 17 }}></i>
        <CIcon customClasses="c-sidebar-nav-icon" />
      </>
    ),
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["MENUS"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Usuários",
    to: "/users",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default NavItems;
