import css from "../Contact/Contact.module.css";

const Contact = ({ contact: { name, number } }) => {
  return (
    <div className={css.wrap}>
      <div className={css.content}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" className={css.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
