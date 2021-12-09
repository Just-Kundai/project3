
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
 } from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const navbarData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/AboutMe",
  },
  {
    label: "Blog",
    href: "/AllPosts",
  },
  {
    label: "Log In",
    href: "/login",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
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
    <Typography variant="h6" component="h1" className={logo}>
      Kate
    </Typography>
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
    <header>
      <AppBar className={navbar}>{displayDesktop()}</AppBar>
    </header>
  );
}
