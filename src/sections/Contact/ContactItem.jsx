import ImageLoader from "../../components/ImageLoader";

export default function ContactItem({ item }) {
  const { title, imgFilePath } = item;
  return (
    <li>
      <ImageLoader filePath={imgFilePath} />
      <p>{title}</p>
    </li>
  );
}
