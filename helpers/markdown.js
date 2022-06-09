import { Fragment } from "react";
import Markdown from "react-markdown";

export const getDescription = (item) => {
  const { description, desc_type } = item;

  switch (desc_type) {
    case "markdown":
      return <Markdown>{description}</Markdown>;
    case "html":
      return <Fragment dangerouslySetInnerHTML={description} />;
    default:
      return description;
  }
};
