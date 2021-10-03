// NPM packages
import { useState} from "react";

// Project files
import ImageLoader from "../../components/ImageLoader";
import Modal from "./Modal";
import ModalProperties from "./ModalProperties";

export default function ProjectCard({ item }) {
  const { title, isReleased, previewImg } = item;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <div
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
