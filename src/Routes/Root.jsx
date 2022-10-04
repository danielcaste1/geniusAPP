import React,{Fragment} from "react";
import { Outlet } from "react-router-dom";
import Header from "../Containers/Header.jsx";

const Root = () => {
  return (
    <div className="flex">
      <Header/>
      <Fragment >
        <Outlet />
      </Fragment>
    </div>
  );
};

export default Root;
