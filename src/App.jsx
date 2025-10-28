import React from "react";
import Routes from "./Routes";
import { inject } from "@vercel/analytics";

// Inicializar Vercel Analytics
inject();

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
