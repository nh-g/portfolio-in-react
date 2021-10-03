import ReactDom from "react-dom";

export default function Modal({ onClose, open, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div
        className="overlay-modal"
        onClick={onClose}
      >
        <div
          className="modal"
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          <div className="corner-button">
            <button onClick={onClose}>x</button>
          </div>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
