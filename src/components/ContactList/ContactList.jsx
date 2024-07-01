import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contacts/selectors";
import css from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <div>
      {contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map((contact) => (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
