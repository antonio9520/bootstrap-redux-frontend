import React from "react";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="w-100 h-100 bg-dark text-white ">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h4>Proyecto</h4>
          <strong>PR</strong>
        </div>
        <ul className="list-unstyled components">
          <li className="">
            <a href="!#">
              <i>Dashboard</i>
            </a>
            </li>
            <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i>Ordenes</i>
            </a>
            </li>
            <ul className="collapse list-unstyled " id="pageSubmenu">
              <li>
                <a href="!#">Page 1</a>
              </li>
              <li>
                <a href="!#">Page 2</a>
              </li>
              <li>
                <a href="!#">Page 3</a>
              </li>
            </ul>
            <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i>Productos</i>
            </a>
            </li>
            <ul className="collapse list-unstyled " id="pageSubmenu">
              <li>
                <a href="!#">Page 1</a>
              </li>
              <li>
                <a href="!#">Page 2</a>
              </li>
              <li>
                <a href="!#">Page 3</a>
              </li>
            </ul>
            <li>
                <a href="!#" className="nav-link disabled">Categorias</a>
            </li>
            <li>
                <a href="!#" className="nav-link disabled">Promociones</a>
            </li>
            <li>
                <a href="!#" className="nav-link disabled">Settings</a>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
