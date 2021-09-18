import ReactDom from "react-dom";

export default function Modal({ onClose, open, children }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay-modal">
        <div className="modal">
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
