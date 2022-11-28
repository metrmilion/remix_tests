import { useOptionalUser } from "~/utils";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Fade,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Form } from "@remix-run/react";

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
      <Grid item xs={8} md={4} lg={3}>
        <Fade in={true}>
          <Card>
            <CardContent>
              <Box sx={{ width: "60%", mx: "20%", my: 2 }}>
                <img src="logo.svg" width="100%" alt="LOCK" />
              </Box>

              <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                Welcome to the app!
              </Typography>
              <Typography align="center">
                LOCK is a simple tool to test the{" "}
                <Box component="span" sx={{ fontWeight: "600" }}>
                  Hill Cypher
                </Box>
                .
              </Typography>
              <Divider>
                <Typography variant="overline">Definition</Typography>
              </Divider>
              <Typography
                sx={{
                  textAlign: "justify",
                  textAlignLast: "center",
                  fontStyle: "italic",
                  px: 2,
                }}
              >
                In classical cryptography, the Hill cipher is a polygraphic
                substitution cipher based on linear algebra. Invented by Lester
                S. Hill in 1929, it was the first polygraphic cipher in which it
                was practical (though barely) to operate on more than three
                symbols at once.
              </Typography>
              <Divider>
                <Link
                  href="https://en.wikipedia.org/wiki/Hill_cipher"
                  underline="hover"
                  color="inherit"
                >
                  <Typography variant="overline">Source: wikipedia</Typography>
                </Link>
              </Divider>
              {user ? (
                <>
                  <Typography align="center" sx={{ mb: 2 }}>
                    Logged in as {user.email}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      role="button"
                      href="/notes"
                      variant="outlined"
                      sx={{ mx: 1 }}
                    >
                      my notes
                    </Button>
                    <Form action="/logout" method="post">
                      <Button
                        role="button"
                        type="submit"
                        variant="contained"
                        sx={{ mx: 1 }}
                      >
                        sign out
                      </Button>
                    </Form>
                  </Box>
                </>
              ) : (
                <>
                  <Typography align="center" sx={{ mb: 2 }}>
                    Please feel free to join and test.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      role="button"
                      href="/join"
                      variant="outlined"
                      sx={{ mx: 1 }}
                    >
                      sign up
                    </Button>
                    <Button
                      role="button"
                      href="/login"
                      variant="contained"
                      sx={{ mx: 1 }}
                    >
                      sign in
                    </Button>
                  </Box>
                </>
              )}
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}></CardActions>
          </Card>
        </Fade>
      </Grid>
    </Grid>
  );
}
