import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

import logo from "../assets/logo/Sunfire_White_WithoutText.svg";

function DrawerAppBar(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <Box sx={{ paddingTop: 2.5, margin: "0px auto" }}>
            <Link href="http://www.sunfiredigitalagency.com">
              <img
                alt="Sunfire Digital Agency logo"
                src={logo}
                style={{ height: "35px" }}
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
