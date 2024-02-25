import { FC } from "react";
import { headingInteraface } from "../../types";

const Heading: FC<headingInteraface> = ({ tag, text, className }) => {
  const Tag = tag || "h1";

  return <Tag className={className}>{text}</Tag>;
};

export default Heading;
