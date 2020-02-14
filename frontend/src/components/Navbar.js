import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Layout } from "antd";

function Navbar() {
  return (
    <div className="menu" style={{ backgroundColor: "#262626" }}>
      <NavLink to="/stories" style={{ color: "#6c6c6c" }}>
        Colección
      </NavLink>
      <NavLink to="/nueva" style={{ color: "#6c6c6c" }}>Agrega tu historia</NavLink>
      <NavLink to="/" style={{ color: "#6c6c6c" }}>
        Home
      </NavLink>
      <NavLink to="/about" style={{ color: "#6c6c6c" }}>
        Acerca de
      </NavLink>
    </div>
  );
}

export default Navbar;
