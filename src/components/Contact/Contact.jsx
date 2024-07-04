import css from "../Contact/Contact.module.css";

const Contact = ({ contact: { id, name, number }, openModal }) => {
  return (
    <div className={css.wrap}>
      <div className={css.content}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => openModal({ id, name, number }, "delete")}
      >
        Delete
      </button>
      <button
        type="button"
        className={css.btn}
        onClick={() => openModal({ id, name, number }, "update")}
      >
        Update
      </button>
    </div>
  );
};

export default Contact;
