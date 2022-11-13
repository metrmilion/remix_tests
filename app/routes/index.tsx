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
      Cześć
      {user ? (
        <Link
          to="/notes"
          className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
        >
          View Notes for {user.email}
        </Link>
      ) : (
        <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
          <Button
            component={Link}
            to="/join"
            variant="contained"
            color="primary"
          >
            sign up
          </Button>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            sign in
          </Button>
        </div>
      )}
    </Box>
  );
}
