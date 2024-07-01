import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../LoginForm/LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ submit }) => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={emailFieldId}>Email</label>
        <Field type="text" name="email" id={emailFieldId} />
        <ErrorMessage name="number" component="span" className={css.error} />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field type="password" name="password" id={passwordFieldId} />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
