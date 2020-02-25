import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Layout } from "antd";

function Navbar() {
  return (
    <div className="navGradient">
      <div className="menu" style={{ backgroundColor: "#262626" }}>
      <NavLink className="navlink" to="/stories" style={{ color: "#6c6c6c" }}>
        Colección
      </NavLink>
      <NavLink className="navlink" to="/nueva" style={{ color: "#6c6c6c" }}>Agrega tu historia</NavLink>
      <NavLink className="navlink" to="/" style={{ color: "#6c6c6c" }}>
        Home
      </NavLink>
      <NavLink className="navlink" to="/about" style={{ color: "#6c6c6c" }}>
        Acerca de
      </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
