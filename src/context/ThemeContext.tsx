import { createContext, useState } from "react";
import { IThemeContext } from "../types";

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const initialTheme = "dark";


const ThemeProvider = (props: any) => {
const [theme, setTheme] = useState(initialTheme)

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const data = { handleTheme, theme };

  return (
    <ThemeContext.Provider value={data}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
export default ThemeContext;
