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
                  substitution cipher based on linear algebra. Invented by
                  Lester S. Hill in 1929, it was the first polygraphic cipher in
                  which it was practical (though barely) to operate on more than
                  three symbols at once.
                </Typography>
                <Divider>
                  <Link href="https://en.wikipedia.org/wiki/Hill_cipher">
                    <Typography variant="overline">
                      Source: wikipedia
                    </Typography>
                  </Link>
                </Divider>
                <Typography align="center" sx={{ mb: 2 }}>
                  Please feel free to join and test.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {user ? (
                  <>
                    <Button href="/notes" variant="contained" sx={{ mx: 1 }}>
                      My notes
                    </Button>
                    <Form action="/logout" method="post">
                      <Button type="submit" variant="contained" sx={{ mx: 1 }}>
                        Sign out
                      </Button>
                    </Form>
                  </>
                ) : (
                  <>
                    <Button href="/join" variant="contained" sx={{ mx: 1 }}>
                      sign up
                    </Button>
                    <Button href="/login" variant="contained" sx={{ mx: 1 }}>
                      sign in
                    </Button>
                  </>
                )}
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}></CardActions>
          </Card>
        </Fade>
      </Grid>
    </Grid>
  );
}
