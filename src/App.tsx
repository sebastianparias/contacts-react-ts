import React from "react";
import logo from "./logo.svg";
import CrudApi from "./components/CrudApi";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <LanguageProvider>
          <CrudApi />
        </LanguageProvider>
      </>
    </div>
  );
}

export default App;
