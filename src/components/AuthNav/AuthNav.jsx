import { Link } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <Link className={css.link} to="/register">
            Ragister
          </Link>
        </li>
        <li>
          <Link className={css.link} to="/login">
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
