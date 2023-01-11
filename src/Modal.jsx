import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "./Context";

const Modal = () => {
  const { isModal, closeModal } = useContext(AppContext);
  return (
    <div className={`modal-overlay ${isModal && "show-modal"}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
