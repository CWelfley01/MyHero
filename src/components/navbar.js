import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/Heros">HEROS</NavLink>
    </div>
  );
}