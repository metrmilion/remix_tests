import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import type { FC, PropsWithChildren } from "react";
import { inThemeLight } from "~/themes/inThemeLight";

export interface AppProvidersProps {}

export const AppProviders: FC<PropsWithChildren<AppProvidersProps>> = ({
  children,
}) => (
  <ThemeProvider theme={inThemeLight}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
