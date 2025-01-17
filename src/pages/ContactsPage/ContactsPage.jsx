import { useEffect, useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { addContact, fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import UpdateModal from "../../components/UpdateModal/UpdateModal";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState(null);
  const [contact, setContact] = useState(null);
  const handleSubmit = (values) => {
    dispatch(addContact(values));
  };

  const handleOpenModal = (contact, type) => {
    setModalType(type);
    setContact(contact);
  };

  const handleCloseModal = () => {
    setModalType(null);
    setContact(null);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm submit={handleSubmit} />
      <SearchBox />
      <ContactList openModal={handleOpenModal} />
      {modalType === "delete" && (
        <DeleteModal
          isOpen={modalType === "delete"}
          currentContact={contact}
          onClose={handleCloseModal}
        />
      )}
      {modalType === "update" && (
        <UpdateModal
          isOpen={modalType === "update"}
          currentContact={contact}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ContactsPage;
