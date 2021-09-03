import React from "react";
import ImageLoader from "../ImageLoader";
import MappingList from "./MappingList";
import Pill from './Pill';
export default function ModalProperties({ item }) {
  const { title, description, github, website, appScreenShot, technologies } = item;

  return (
    <div id="modal-popup">
      <ImageLoader filePath={appScreenShot} />
      <h2>{title}</h2>
      <p>{description}</p>
      <ul id="technologies-list">
        <MappingList Component={Pill} getData={technologies} />
      </ul>
      <div className="buttons">
        <button className="purple-button">
          <a target="_blank" rel="noopener noreferrer" href={website}>
            Visit website/app
          </a>
        </button>
        <button className="white-button">
          <a target="_blank" rel="noopener noreferrer" href={github}>
            Git repository
          </a>
        </button>
      </div>
    </div>
  );
}
