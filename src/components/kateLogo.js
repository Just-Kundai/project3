import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>{kateLogo}</Toolbar>;
  };

  const kateLogo = (
    <Typography variant="h6" component="h1">
      Kate
    </Typography>
  );

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
