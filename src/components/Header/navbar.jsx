import React from "react";
import "./navbarStyle.css";
import favicon from "./favicon.png";
function Navbar() {
  return (
    <ul>
      <li>
        <img src={favicon} />
      </li>
      <li>
        <a href="default.asp">Home</a>
      </li>
      <li>
        <a href="news.asp">News</a>
      </li>
      <li>
        <a href="contact.asp">Contact</a>
      </li>
      <li>
        <a href="about.asp">About</a>
      </li>
    </ul>
  );
}
export default Navbar;
