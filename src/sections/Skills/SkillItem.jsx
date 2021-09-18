import ImageLoader from "../../components/ImageLoader";

export default function SkillItem({ item }) {
  const { title, imgFilePath } = item;
  return (
    <div>
      <ImageLoader filePath={imgFilePath} />
      <caption>{title}</caption>
    </div>
  );
}
