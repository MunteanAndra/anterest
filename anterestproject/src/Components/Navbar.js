import React from 'react';
import {  Link } from "react-router-dom";
import "./Navbar.css";

const Navbar= () =>{
  return (
  <div class="navbar">
    <li>
      <Link to="/Photos">Photos</Link>
    </li>
  </div>
  );
}
export default Navbar;