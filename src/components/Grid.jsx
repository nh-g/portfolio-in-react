export default function Grid({ sectionName, getData, filePath }) {
  const [fileFolder, fileName] = filePath.split("/");
  const imageURL =
    require(`../assets/images/${fileFolder}/${fileName}`).default;

  return (
    <section id={`${sectionName}`} className="reverse">
      <h1 className="section-name">{sectionName}</h1>
      <div className="grid">
        {getData()}
        {(sectionName === "hero" || sectionName === "about")?
        <img alt="logo" src={imageURL} />: ""}
      </div>
    </section>
  );
}
