import MappingList from "./atoms/MappingList";
import ImageLoader from "./ImageLoader";

export default function Grid({ sectionName, getIntro, filePath, getData, Component }) {

  return (
    <section id={`${sectionName}`} className="reverse">
      {/* Section Tittle */}
      <h1 className="section-name">{sectionName}</h1>

      <div className="grid">
        {/* Section Introduction Paragraph */}
        <div>{getIntro()}</div>

        {/* Section Main Content */}
        {sectionName === "hero" || sectionName === "about" ? (
          <ImageLoader filePath={filePath} />
        ) : (
          <MappingList Component={Component} getData={getData} />
        )}
      </div>
    </section>
  );
}
