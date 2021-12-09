
import {
  AppBar,
  Toolbar,

  makeStyles,
  Button,
 } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import katie1 from "../pages/HomePage/Katie1.png";

const navbarData = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT",
    href: "/AboutMe",
  },
  {
    label: "BLOG",
    href: "/AllPosts",
  },
  
];

const useStyles = makeStyles(() => ({
  navbar: {
    backgroundColor: "white",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "black",
    textAlign: "left",
  },
  menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
      color: "#242124",
   },
   toolbar: {
     display: "flex",
     justifyContent: "space-between",
   },
}));

export default function Navbar() {
  const { navbar, logo, menuButton } = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar>
        {kateLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
   )
  };

  const kateLogo = (
    <div className="logo-div">
    <img src={katie1} />
    </div>
  );

  const getMenuButtons = () => {
   return navbarData.map(({ label, href }) => {
     return (
       <Button
         {...{
           key: label,
           color: "inherit",
           to: href,
           component: RouterLink,
           className: menuButton
         }}
       >
         {label}
       </Button>
     );
   });
 };

  return (
    <navbar>
      <AppBar className={navbar}>{displayDesktop()}</AppBar>
    </navbar>
  );
}
