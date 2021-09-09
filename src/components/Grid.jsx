import MappingList from "./atoms/MappingList";
import ImageLoader from "./ImageLoader";

// More than 3 function arguments -1
export default function Grid({
  sectionName,
  getIntro,
  filePath,
  getData,
  Component,
}) {
  return (
    <section id={`${sectionName}`} className="reverse">
      {/* Tittle */}
      <h1 className="section-name">{sectionName}</h1>

      <div className="grid">
        {/* Introduction Paragraph */}
        <div>{getIntro()}</div>

        {/* Main Content */}
        {sectionName === "hero" || sectionName === "about" ? (
          <ImageLoader filePath={filePath} />
        ) : (
          <div className="list">
            <MappingList Component={Component} getData={getData} />
          </div>
        )}
      </div>
    </section>
  );
}
