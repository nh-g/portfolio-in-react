import React from "react";
import ImageLoader from "../ImageLoader";
import MappingList from "./MappingList";
import Pill from './Pill';
export default function ModalProperties({ item }) {
  const { title, description, github, website, appScreenShot, technologies } = item;

  return (
    <div id="modal-popup">
      <div>
        <ImageLoader filePath={appScreenShot} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="row">
          <MappingList Component={Pill} getData={technologies} />
        </div>
        {/* <div className="buttons"> */}
        <button className="button black">
          <a target="_blank" rel="noopener noreferrer" href={website}>
            Visit website/app
          </a>
        </button>
        <button className="button white">
          <a target="_blank" rel="noopener noreferrer" href={github}>
            Git repository
          </a>
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
