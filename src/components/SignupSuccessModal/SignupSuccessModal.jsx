import "./SignupSuccessModal.css";

function SignupSuccessModal({ isOpen, onClose, handleSigninClick }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content-success">
        <button className="modal__close" type="button" onClick={onClose} />
        <h2 className="modal__title-success">
          Registration successfully completed!
        </h2>
        <button
          type="button"
          onClick={handleSigninClick}
          className="modal__sign-up_success"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignupSuccessModal;
