import { createTheme } from "@mui/material/styles";
export default createTheme({
  typography: {
    useNextVariants: true,
  },
  
    palette: {
        "common": { "black": "#000", "white": "#fff" },
        "background": {
        "paper": "rgba(198, 205, 255, 1)",
        "default": "rgba(247, 250, 255, 1)"
        },
        "primary": {
        "light": "rgba(100, 122, 163, 1)",
        "main": "rgba(2, 8, 135, 1)",
        "dark": "rgba(51, 65, 149, 1)",
        "contrastText": "#fff"
        },
        "secondary": {
        "light": "rgba(149, 178, 176, 1)",
        "main": "rgba(73, 138, 59, 1)",
        "dark": "rgba(144, 45, 65, 1)",
        "contrastText": "rgba(255, 255, 255, 1)"
        },
        "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
        },
        "text": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "disabled": "rgba(0, 0, 0, 0.38)",
        "hint": "rgba(0, 0, 0, 0.38)"
        }
    }
  
  
});
