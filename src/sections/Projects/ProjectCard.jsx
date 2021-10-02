// NPM packages
import { useState, useEffect, useRef } from "react";

// Project files
import ImageLoader from "../../components/ImageLoader";
import Modal from "./Modal";
import ModalProperties from "./ModalProperties";

export default function ProjectCard({ item }) {
  const { title, isReleased, previewImg } = item;

  const [isOpen, setIsOpen] = useState(false);

  /** capture click outside with React Hook */
  const node = useRef();
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <article>
      <div
        ref={node}
        onClick={() => isReleased && setIsOpen(true)}
        className={isReleased ? "normal" : "overlay"}
      >
        {!isReleased && (
          <div className="overlay-text">
            <p>Coming soon</p>
          </div>
        )}

        <ImageLoader filePath={previewImg} />
        <h3>{title}</h3>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalProperties item={item} />
      </Modal>
    </article>
  );
}
