import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

export default function Navigation() {
  return (
    <ul className={s.navUl}>
      <li>
        <NavLink
          to="/login"
          className={s.navLink}
          activeClassName={s.navLinkactive}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={s.navLink}
          activeClassName={s.navLinkactive}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
}
