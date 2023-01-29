import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";

const Home = () => {
  const form = React.useRef();
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e) => {
    debugger;
    e.preventDefault();
    emailjs
      .sendForm(
        "service_925nrmc",
        "template_h9f3cqa",
        form.current,
        "3qQjX53eMlx5510nE"
      )
      .then(
        (result) => {
          enqueueSnackbar("You've been added to our list 🎉", {
            variant: "success",
          });
        },
        (error) => {
          enqueueSnackbar("An error occured.", {
            variant: "error",
          });
        }
      );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 64px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "90%",
        }}
      >
        <Typography
          variant="h1"
          sx={{ color: "common.white", textTransform: "uppercase" }}
        >
          Coming Soon
        </Typography>
        <Typography sx={{ color: "common.white" }}>
          Be the first to know when our new site is live.
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 2,
              paddingTop: 1,
            }}
          >
            <TextField
              label="Email Address"
              name="reply_to"
              required
              sx={{
                "& label.Mui-focused": {
                  color: "common.white",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "common.white",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "common.white",
                    borderRadius: `4px`,
                  },
                  "&:hover fieldset": {
                    borderColor: "common.white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "common.white",
                  },
                },
              }}
            />
            <Button
              size="small"
              type="submit"
              variant="outlined"
              sx={{ borderColor: "white", color: "white" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Home;
