import React from "react";
import Home from "./Home";
import { GlobalStateProvider } from "./globalDataContext";
const App = () => {
  return (
    <GlobalStateProvider>
      <Home />
    </GlobalStateProvider>
  );
};

export default App;
