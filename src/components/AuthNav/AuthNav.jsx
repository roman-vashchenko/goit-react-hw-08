import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <NavLink className={buildLinkClass} to="/register">
            Ragister
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/login">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
