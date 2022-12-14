import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
  Fade,
} from "@mui/material";
import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { verifyLogin } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { password: "Password is required", email: null } },
      { status: 400 }
    );
  }

  const user = await verifyLogin(email, password);

  if (!user) {
    return json(
      { errors: { email: "Invalid email or password", password: null } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

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
            <CardHeader title={"Sign in"} />
            <CardContent>
              <Form method="post" noValidate>
                <TextField
                  fullWidth
                  label="e-mail"
                  id="email"
                  variant="outlined"
                  sx={{ mb: 2 }}
                  ref={emailRef}
                  required
                  autoFocus={true}
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={actionData?.errors?.email ? true : undefined}
                  helperText={actionData?.errors?.email}
                  error={Boolean(actionData?.errors?.email)}
                />

                <TextField
                  fullWidth
                  label="password"
                  id="password"
                  variant="outlined"
                  sx={{ mb: 2 }}
                  ref={emailRef}
                  required
                  autoFocus={true}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  aria-invalid={actionData?.errors?.password ? true : undefined}
                  helperText={actionData?.errors?.password}
                  error={Boolean(actionData?.errors?.password)}
                />
                <FormControlLabel
                  control={
                    <Checkbox defaultChecked id="remember" name="remember" />
                  }
                  label="Remember me"
                />
                <input type="hidden" name="redirectTo" value={redirectTo} />
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{ my: 1 }}
                >
                  Log in
                </Button>
              </Form>
              <Typography align="center">
                Don't have an account? <Link href="/join">Sign up</Link>
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </Grid>
    </Grid>
  );
}
