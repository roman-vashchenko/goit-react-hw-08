import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "../AppBar/AppBar.module.css";

const AppBar = () => {
  return (
    <div className={css.appBar}>
      <Navigation />
      <AuthNav />
    </div>
  );
};

export default AppBar;
