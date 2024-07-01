import LoginForm from "../../components/LoginForm/LoginForm";
import css from "../LoginPage/LoginPage.module.css";

const LoginPage = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={css.container}>
      <LoginForm submit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
