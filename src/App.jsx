import React from "react";
import Routes from "./Routes";
import { inject } from "@vercel/analytics";
import ButtonMessageBot from "./components/chatbot/ButtonMessageBot";

// Inicializar Vercel Analytics
inject();

function App() {
  return (
    <>
      <Routes />
      <ButtonMessageBot />
    </>
  );
}

export default App;
