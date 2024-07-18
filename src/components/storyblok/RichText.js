import {RichTextRenderer} from "@/utils/richTextRenderer";

const RichText = ({ blok }) => {
  return <RichTextRenderer document={blok.value} />;
};

export default RichText;
