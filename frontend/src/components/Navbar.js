import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Layout } from "antd";

function Navbar() {
  return (
    <div className="menu" style={{ backgroundColor: "#185e90" }}>
      <NavLink to="/stories" style={{ color: "#daaa00" }}>
        Colección
      </NavLink>
      <NavLink style={{ color: "#daaa00" }}>Agrega tu historia</NavLink>
      <NavLink to="/" style={{ color: "#daaa00" }}>
        Home
      </NavLink>
      <NavLink to="/about" style={{ color: "#daaa00" }}>
        Acerca de
      </NavLink>
    </div>
  );
}

export default Navbar;
