import React, { useContext, useEffect } from "react";
import { Appcontext } from "./context/context1";
// import { useContext } from "react";
// import { Appcontext } from "./context/context1";
// import { useEffect } from "react";
import Quote from "./components/Quote";

const App = () => {
  const { fetchquote } = useContext(Appcontext);
  //
  useEffect(() => {
    //
    fetchquote();
    //
  }, []);
  return (
    <div>
      <Quote />
      App
    </div>
  );
};

export default App;
