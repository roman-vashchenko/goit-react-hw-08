import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
