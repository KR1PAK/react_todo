import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { lightGreen, pink } from "@material-ui/core/colors";
import Todos from "./components/Todos/Todos";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[400],
      main: lightGreen[500],
      dark: lightGreen[600],
    },
    secondary: {
      light: pink[400],
      main: pink[500],
      dark: pink[600],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 977,
      lg: 1173,
      xl: 1589,
      xxl: 1901,
    },
  },
  // typography: {
  //   useNextVariants: true,
  // },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Todos />
    </MuiThemeProvider>
  );
};

export default App;
