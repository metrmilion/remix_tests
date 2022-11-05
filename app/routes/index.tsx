import { Link } from "@remix-run/react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useOptionalUser } from "~/utils";
import { Box, IconButton } from "@mui/material";

export default function Index() {
  const user = useOptionalUser();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#fff",
      }}
    >
      <Box sx={{ width: "300px" }}>
        <img src="logo.svg" alt="eda" />
      </Box>

      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        href="/login"
      >
        <LockOutlinedIcon />
      </IconButton>
    </Box>
  );
}
