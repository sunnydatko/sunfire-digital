import Box from "@mui/material/Box";
import ResponsiveMenu from "./ResponsiveMenu";

const Layout = ({ children }) => {
  return (
    <Box sx={{ width: "100vw" }}>
      <ResponsiveMenu />
      <>{children}</>
    </Box>
  );
};

export default Layout;
