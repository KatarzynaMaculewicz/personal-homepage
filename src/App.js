import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeSwitch } from "./common/ThemeSwitch/ThemeSwitch";
import { selectIsDark } from "./common/ThemeSwitch/themeSlice";
import { lightTheme, darkTheme } from "./theme/themes";

function App() {
  const isDark = useSelector(selectIsDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ThemeSwitch />
    </ThemeProvider>
  );
}

export default App;