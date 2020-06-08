import React, { useState } from "react";
import "./stylesheets/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AppTheme from "./components/AppThems";

export const ThemeContext = React.createContext(AppTheme.dark);

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <Home />;
    </ThemeContext.Provider>
  );
}

export default App;
