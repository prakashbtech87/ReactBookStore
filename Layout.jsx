import { Outlet } from "react-router-dom";

import React from "react";
import NavBar from "./partials/NavBar";

export default function Layout(){
    return (
        <React.Fragment>
          <NavBar/>
          <Outlet />
          </React.Fragment>
       );
}
