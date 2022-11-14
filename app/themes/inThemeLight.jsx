import { createTheme } from "@mui/material/styles";
import { inBlue } from "./colors/inBlue";
import { inPurple } from "./colors/inPurple";
import BarlowCondensedLight from "./fonts/BarlowCondensedLight.ttf";
import BarlowCondensedLightItalic from "./fonts/BarlowCondensedLightItalic.ttf";
import BarlowCondensedRegular from "./fonts/BarlowCondensedRegular.ttf";
import BarlowCondensedItalic from "./fonts/BarlowCondensedItalic.ttf";
import BarlowCondensedSemiBold from "./fonts/BarlowCondensedSemiBold.ttf";
import BarlowCondensedSemiBoldItalic from "./fonts/BarlowCondensedSemiBoldItalic.ttf";

export const inThemeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4800ff",
    },
    secondary: {
      main: "#04f9f2",
    },
    background: {
      default: "#f3f3f3",
      paper: "#ffffff",
    },
    text: {
      primary: "rgba(0,0,0,0.8)",
      secondary: "rgba(0,0,0,0.6)",
      disabled: "rgba(0,0,0,0.4)",
      hint: "rgba(0,0,0,0.4)",
    },
    divider: "rgba(0,0,0,0.1)",
  },
  typography: {
    fontFamily: '"Barlow Condensed", "Arial", sans-serif', // https://fonts.google.com/specimen/Barlow+Condensed
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
              @font-face {
                font-family: 'Barlow Condensed';
                font-style: normal;
                font-display: swap;
                font-weight: 300;
                src: local('Barlow Condensed'), local('Barlow Condensed'), url(${BarlowCondensedLight}) format('truetype');
              }
              @font-face {
                font-family: 'Barlow Condensed';
                font-style: italic;
                font-display: swap;
                font-weight: 300;
                src: local('Barlow Condensed'), local('Barlow Condensed'), url(${BarlowCondensedLightItalic}) format('truetype');
              }
              @font-face {
                font-family: 'Barlow Condensed';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Barlow Condensed'), local('Barlow Condensed'), url(${BarlowCondensedRegular}) format('truetype');
              }
              @font-face {
                font-family: 'Barlow Condensed';
                font-style: italic;
                font-display: swap;
                font-weight: 400;
                src: local('Barlow Condensed'), local('Barlow Condensed'), url(${BarlowCondensedItalic}) format('truetype');
              }
              @font-face {
                font-family: 'Barlow Condensed';
                font-style: normal;
                font-display: swap;
                font-weight: 600;
                src: local('Barlow Condensed'), local('Barlow Condensed'), url(${BarlowCondensedSemiBold}) format('truetype');
              }
              @font-face {
                font-family: 'Barlow Condensed';
                font-style: italic;
                font-display: swap;
                font-weight: 600;
                src: local('Barlow Condensed'), local('Barlow Condensed'), url(${BarlowCondensedSemiBoldItalic}) format('truetype');
              }
            `,
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: { boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)" },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 28,
          padding: "10px 16px",
          fontSize: "1rem",
          letterSpacing: 1,
        },
      },
    },
  },
});
