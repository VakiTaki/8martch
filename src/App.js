import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  const appRoutes = useRoutes(routes);
  return (
    <div className=" relative  flex flex-col overflow-scroll ">
      <div className=" w-full flex-grow  ">
        {appRoutes}
      </div>
    </div>
  );
}

export default App;
