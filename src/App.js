import React from "react";
import Header from "./Containers/Header.jsx";
import Home from "./Routes/Home.jsx";
import Search from "./Routes/Search.jsx";

function App() {

  return (
    <div className="flex">
      <Header/>
      <Search/>
    </div>
  );
}

export default App;