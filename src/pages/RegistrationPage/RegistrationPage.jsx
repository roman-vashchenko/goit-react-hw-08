import { useDispatch } from "react-redux";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "../RegistrationPage/RegistrationPage.module.css";
import { register } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(register(values));
    console.log(values);
  };
  return (
    <div className={css.container}>
      <RegistrationForm submit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;
