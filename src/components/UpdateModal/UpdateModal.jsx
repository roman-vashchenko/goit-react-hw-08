import ReactModal from "react-modal";
import { Field, Formik, Form } from "formik";
import { useId } from "react";

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.3)";
ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -90%)",
    width: "300px",
    height: "100px",
    overflow: "hidden",
    padding: "0",
    border: "1px solid black",
  },
};

const UpdateModal = ({ isOpen, onClose, currentContact }) => {
  const nameFieldId = useId();
  const nubmerFieldId = useId();

  const handleSubmit = (values) => {
    onClose(values);
  };

  return (
    <div>
      <ReactModal isOpen={isOpen} style={customStyles}>
        <Formik
          initialValues={{
            name: currentContact.name,
            number: currentContact.number,
            id: currentContact.id,
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor={nameFieldId}>Name</label>
              <Field id={nameFieldId} name="name" placeholder="Name" />
            </div>
            <div>
              <label htmlFor={nubmerFieldId}>Number</label>
              <Field id={nubmerFieldId} name="number" placeholder="Number" />
            </div>
            <button type="submit">Update</button>
          </Form>
        </Formik>
        <button type="button" onClick={() => onClose("cancel")}>
          Cancel
        </button>
      </ReactModal>
    </div>
  );
};

export default UpdateModal;
