import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createUserSession, getUserId } from "~/session.server";

import { createUser, getUserByEmail } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";
import {
  Grid,
  Fade,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Link,
  Button,
  Typography,
} from "@mui/material";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/notes");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  const regex = new RegExp(
    "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"
  );

  if (!regex.test(password)) {
    return json(
      {
        errors: {
          email: null,
          password:
            "Your password must be at least 8 characters including a lowercase letter, an uppercase letter, a number, and a special character.",
        },
      },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, password);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "Sign Up",
  };
};

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
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
          <Card sx={{ minWidth: 200 }}>
            <CardHeader title={"Sign up"} />
            <CardContent>
              <Form method="post">
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
                  ref={passwordRef}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  required
                  autoFocus={true}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  aria-invalid={actionData?.errors?.password ? true : undefined}
                  helperText={actionData?.errors?.password}
                  error={Boolean(actionData?.errors?.password)}
                />
                <input type="hidden" name="redirectTo" value={redirectTo} />
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{ my: 1 }}
                >
                  register
                </Button>
              </Form>
              <Typography align="center">
                Already have an account? <Link href="/login">Sign in</Link>
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </Grid>
    </Grid>
  );
}
