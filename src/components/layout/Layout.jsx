import React, { Fragment, useState } from "react";
import "./Layout.css";
import { Sidebar, Nav } from "../";

const Layout = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <div className={open ? "cont-sidebar-active" : "cont-sidebar"}>
        <Sidebar />
      </div>

      <div className={open ? "cont-nav-active" : "cont-nav"}>
        <Nav handleOpen={handleOpen} open={open}/>
      </div>

      <div className={open ? "cont-main-active" : "cont-main"}>
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
