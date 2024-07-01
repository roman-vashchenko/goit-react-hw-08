import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <div>
      <ul className={css.list}>
        <li>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
