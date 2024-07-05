import css from "../Contact/Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";

const Contact = ({ contact: { id, name, number }, openModal }) => {
  return (
    <div className={css.wrap}>
      <div className={css.content}>
        <p className={css.name}>
          <IoMdContact className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.butWrap}>
        <button
          type="button"
          className={css.btn}
          onClick={() => openModal({ id, name, number }, "delete")}
        >
          <MdDelete />
        </button>
        <button
          type="button"
          className={css.btn}
          onClick={() => openModal({ id, name, number }, "update")}
        >
          <HiPencil />
        </button>
      </div>
    </div>
  );
};

export default Contact;
