import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "../AppBar/AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return (
    <div>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};

export default AppBar;
