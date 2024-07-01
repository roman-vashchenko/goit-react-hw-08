// import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../RegistrationForm/RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = ({ submit }) => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" className={css.error} />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="text" name="email" id={emailFieldId} />
        <ErrorMessage name="number" component="span" className={css.error} />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field type="password" name="password" id={passwordFieldId} />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit" className={css.btn}>
          Ragister
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
