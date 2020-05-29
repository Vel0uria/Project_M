import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="navGradient">
      <div className="menu" style={{ backgroundColor: "#1f191f" }}>
      <NavLink className="navlink" to="/stories" style={{ color: "#a98316" }}>
        Colección
      </NavLink>
      <NavLink className="navlink" to="/nueva" style={{ color: "#a98316" }}>Agrega tu historia</NavLink>
      <NavLink className="navlink" to="/" style={{ color: "#a98316" }}>
        Home
      </NavLink>
      <NavLink className="navlink" to="/about" style={{ color: "#a98316" }}>
        Acerca de
      </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
