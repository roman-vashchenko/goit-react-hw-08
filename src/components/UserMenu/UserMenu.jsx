import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "../UserMenu/UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  const hendleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.menu}>
      <p>Welcome, {name}</p>
      <button className={css.btn} type="button" onClick={hendleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
