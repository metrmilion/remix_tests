import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Fade,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

export default function Index() {
  const user = useOptionalUser();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      height="100vh"
    >
      <Grid item xs={8} md={3}>
        <Fade in={true}>
          <Card sx={{ minWidth: 275 }}>
            {/* <CardHeader
                        title={'Login'}
                        action={
                            <IconButton>
                                <MoreVert />
                            </IconButton>
                        }
                    /> */}
            <CardContent>
              <Box sx={{ width: "60%", mx: "20%", my: 2 }}>
                <img src="logo.svg" width="100%" alt="insurea" />
              </Box>
              <Box>
                <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                  Welcome to the app!
                </Typography>
                <Typography align="center" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque eligendi iusto animi explicabo quaerat, sapiente
                  ducimus velit ab error soluta minus. Qui quod veniam impedit
                  provident sit aperiam perferendis quisquam?
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  component={Link}
                  to="/join"
                  variant="contained"
                  sx={{ mx: 1 }}
                >
                  sign up
                </Button>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  sx={{ mx: 1 }}
                >
                  sign in
                </Button>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}></CardActions>
          </Card>
        </Fade>
      </Grid>
    </Grid>
  );
}
