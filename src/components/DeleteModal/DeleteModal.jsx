import ReactModal from "react-modal";
import css from "../DeleteModal/DeleteModal.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

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

const DeleteModal = ({ isOpen, onClose, currentContact }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ReactModal isOpen={isOpen} style={customStyles}>
        <div className={css.modal}>
          <p className={css.text}>You want to delete a contact</p>

          <button
            type="button"
            className={(css.btn, css.btnDelete)}
            onClick={() => {
              dispatch(deleteContact(currentContact.id));
              onClose();
            }}
          >
            Delete
          </button>
          <button type="button" className={css.btn} onClick={() => onClose()}>
            Cancel
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default DeleteModal;
