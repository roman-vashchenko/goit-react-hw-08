import ReactModal from "react-modal";
import { Field, Formik, Form } from "formik";
import { useId } from "react";
import { updateContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import css from "../UpdateModal/UpdateModal.module.css";

ReactModal.defaultStyles.overlay.backgroundColor = "none";
ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -90%)",
    width: "450px",
    height: "195px",
    overflow: "hidden",
    padding: "0",
    border: "1px solid black",
  },
};

const UpdateModal = ({ isOpen, onClose, currentContact }) => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const nubmerFieldId = useId();

  const handleSubmit = (values) => {
    dispatch(updateContact(values));
    onClose();
  };

  return (
    <div>
      <ReactModal isOpen={isOpen} style={customStyles}>
        <div className={css.modal}>
          <p className={css.text}>Enter the data to change the contact</p>
          <Formik
            initialValues={{
              name: currentContact.name,
              number: currentContact.number,
              id: currentContact.id,
            }}
            onSubmit={handleSubmit}
          >
            <Form className={css.form}>
              <div>
                <label htmlFor={nameFieldId}>Name</label>
                <Field id={nameFieldId} name="name" placeholder="Name" />
              </div>
              <div>
                <label htmlFor={nubmerFieldId}>Number</label>
                <Field id={nubmerFieldId} name="number" placeholder="Number" />
              </div>
              <button type="submit" className={css.btnUpdate}>
                Save
              </button>
            </Form>
          </Formik>
          <button
            type="button"
            className={css.btnClose}
            onClick={() => onClose()}
          >
            <IoCloseCircleOutline size="25" />
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default UpdateModal;
