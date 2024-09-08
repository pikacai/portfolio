import React, { Fragment } from "react";

interface Props {
  text: string;
  className?: string;
  parentElement?: string;
}

function BoldText({ text, className, parentElement } : Props) {
  // Split the text by the underscore character to identify the parts to be highlighted
  const parts = text.split("_");

  // Create the text with spans around the highlighted parts
  const renderedText = parts.map((part, index) => {
    // Apply the gradient to every alternate part (which was wrapped in underscores)
    if (index % 2 !== 0) {
      return (
        <span key={index} className="font-semibold">
          {part}
        </span>
      );
    }
    // Non-highlighted text
    return part;
  });

  // If there's an odd number of underscores, the last part should be wrapped in a span
  if (parts.length % 2 === 0) {
    renderedText.push(
      <span key="last" className="font-semibold">
        {renderedText.pop()}
      </span>
    );
  }

  // Use React.createElement to create the element dynamically
  return React.createElement(
    parentElement || React.Fragment,
    //@ts-ignore
    parentElement ? { className } : null,
    renderedText
  );
};

export default BoldText;