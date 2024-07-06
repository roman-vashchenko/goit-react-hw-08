import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "../RegistrationForm/RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
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
