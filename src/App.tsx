import React from "react";
import CrudApi from "./components/CrudApi";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <ThemeProvider>
          <LanguageProvider>
            <CrudApi />
          </LanguageProvider>
        </ThemeProvider>
      </>
    </div>
  );
}

export default App;
