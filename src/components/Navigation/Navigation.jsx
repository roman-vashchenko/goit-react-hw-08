import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <div>
      <ul className={css.list}>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink className={buildLinkClass} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
