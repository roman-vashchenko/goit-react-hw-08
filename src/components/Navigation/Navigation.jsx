import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
