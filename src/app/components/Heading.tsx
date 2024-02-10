import React from "react";

export interface HeadingProps {
  tag?: keyof React.ReactHTML;
  text?: string;
  className?: string;
}

const Heading = ({ tag, text, className }: HeadingProps) => {
  const Tag = tag || "h1";

  return <Tag className={className}>{text}</Tag>;
};

export default Heading;
