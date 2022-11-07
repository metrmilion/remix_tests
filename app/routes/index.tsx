import { Link } from "@remix-run/react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useOptionalUser } from "~/utils";
import { Box, Button, IconButton } from "@mui/material";

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

      <Button variant="outlined" startIcon={<LockOutlinedIcon />} href="/login">
        log in
      </Button>
    </Box>
  );
}
