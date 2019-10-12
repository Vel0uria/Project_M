import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Layout } from "antd";

function Navbar() {
  return (
    <div className="menu" style={{ backgroundColor: "#262626" }}>
      <NavLink to="/stories" style={{ color: "#f8f8f8" }}>
        Colección
      </NavLink>
      <NavLink style={{ color: "#f8f8f8" }}>Agrega tu historia</NavLink>
      <NavLink to="/" style={{ color: "#f8f8f8" }}>
        Home
      </NavLink>
      <NavLink to="/about" style={{ color: "#f8f8f8" }}>
        Acerca de
      </NavLink>
    </div>
  );
}

export default Navbar;
