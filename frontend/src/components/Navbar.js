import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Layout } from "antd";

function Navbar() {
  return (
    <div className="menu" style={{ backgroundColor: "#946f81" }}>
      <NavLink to="/stories" style={{ color: "#442429" }}>
        Colección
      </NavLink>
      <NavLink style={{ color: "#442429" }}>Agrega tu historia</NavLink>
      <NavLink to="/" style={{ color: "#442429" }}>
        Home
      </NavLink>
      <NavLink to="/about" style={{ color: "#442429" }}>
        Acerca de
      </NavLink>
    </div>
  );
}

export default Navbar;
