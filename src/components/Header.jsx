import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MenuBook } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#0b134d", color: "white", boxShadow: "none" }}
        position="sticky"
        color="primary"
      >
        <Toolbar>
          <Typography variant="h6">
            <NavLink to="/">
              <MenuBook />
            </NavLink>
          </Typography>
          <Typography variant="h6" sx={{ mt: "-5px", ml: "10px" }}>
            <NavLink to="/">Home</NavLink>
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              LinkComponent={NavLink}
              to="/books"
              disableRipple
              label="Books"
              sx={{ opacity: "1" }}
            />
            <Tab
              LinkComponent={NavLink}
              to="/addbook"
              disableRipple
              label="Add product"
              sx={{ opacity: "1" }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
