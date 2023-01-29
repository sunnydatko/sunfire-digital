import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <Box
      className="footer"
      component="footer"
      sx={{ backgroundColor: "#1b1b1b", flexShrink: 0, textAlign: "center" }}
    >
      <Container sx={{ paddingY: 2 }}>
        <Button
          href="https://github.com/sunnydatko/sunny-datko"
          disableFocusRipple
          disableRipple
          sx={{
            display: "block",
            "&:hover": {
              color: "#48d1ff",
            },
          }}
          variant="text"
        >
          © SUNFIRE DIGITAL AGENCY 2023
        </Button>
      </Container>
    </Box>
  );
};

export default Footer;
