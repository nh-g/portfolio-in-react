// NPM packages
import React from "react";

// project files
import ImageLoader from "../../components/ImageLoader";
import MappingList from "../../components/MappingList";
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
        <a target="_blank" rel="noopener noreferrer" href={website}>
          <button className="button black">Visit website/app</button>
        </a>
        <a target="_blank" rel="noopener noreferrer" href={github}>
          <button className="button white">Git repository</button>
        </a>
        {/* </div> */}
      </div>
    </div>
  );
}
