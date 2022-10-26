import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const active = { color: '#A7774B' };
  return (
    <header>
      <div className="inner">
        <h1>
          <NavLink exact to='/'>
            CERING
          </NavLink>
        </h1>
        <ul id="gnb">
          <li>
            <NavLink exact to='/' activeStyle={active}>
              HOME
            </NavLink>

          </li>
          <li>
            <NavLink to='/about' activeStyle={active}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to='/services' activeStyle={active}>
              SERVICES
            </NavLink>

          </li>
          <li>
            <NavLink to='/project' activeStyle={active}>
              PROJECT
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeStyle={active}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}