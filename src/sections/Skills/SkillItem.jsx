import ImageLoader from "../../components/ImageLoader";

export default function SkillItem({ item }) {
  const { title, imgFilePath } = item;
  return (
    <figure>
      <ImageLoader filePath={imgFilePath} />
      <figcaption>{title}</figcaption>
    </figure>
  );
}
