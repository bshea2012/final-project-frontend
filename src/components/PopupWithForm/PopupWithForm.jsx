import { useState } from "react";
import "./PopupWithForm.css";

function PopupWithForm({ children, title, isOpen, onSubmit, onClose }) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose} />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
