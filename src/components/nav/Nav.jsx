import React from "react";
import "./Nav.css";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = (props) => {
  const { handleOpen, open } = props;
  return (
    <nav className="navbar navbar-expand-md ">
      <div className="d-flex justify-content-between w-100">
        <div>
          <button
            onClick={handleOpen}
            className="btn-open btn btn-primary rounded-circle "
          >
            <span>
              {open ? (
                <FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon="chevron-left"></FontAwesomeIcon>
              )}
            </span>
          </button>
        </div>
        <div>
          <Link to="/new-product">
          <button className="btn btn-outline-success my-2 my-sm-0 ">
            Nuevo Producto
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
