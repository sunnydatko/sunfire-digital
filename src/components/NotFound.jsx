import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <Container>
      <Helmet title="Page Not Found" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "max-content",
          paddingTop: 20,
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", md: "48%" },
            textAlign: "center",
            color: "common.white",
          }}
        >
          <Typography gutterBottom variant="h1">
            Oh no, 404!
          </Typography>
          <Typography>
            We can't find what you were looking for. If you think we should have
            found what you were looking for then{" "}
            <Link
              href="mailto:sunnydatko@gmail.com"
              sx={{
                color: "common.white",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              let us know
            </Link>
            .
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
