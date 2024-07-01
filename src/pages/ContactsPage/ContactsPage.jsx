import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <ContactForm submit={handleSubmit} />
      <ContactList />
      <SearchBox />
    </div>
  );
};

export default ContactsPage;
