import { Link } from "@remix-run/react";

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

      <Link
        to="/join"
        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
      >
        Sign up
      </Link>
      <Link
        to="/login"
        className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
      >
        Log In
      </Link>
    </Box>
  );
}
