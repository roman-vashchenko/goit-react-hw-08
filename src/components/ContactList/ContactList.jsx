import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = ({ openModal }) => {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      {visibleContacts.length > 0 && (
        <ul className={css.list}>
          {visibleContacts.map((contact) => (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} openModal={openModal} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
