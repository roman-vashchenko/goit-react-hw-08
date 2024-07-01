import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "../LoginPage/LoginPage.module.css";
import { login } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <div className={css.container}>
      <LoginForm submit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
