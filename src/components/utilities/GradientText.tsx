import React from 'react';

interface Props {
  gradient: string,
  text: string,
  className?: string,
  parentElement: string,
}

function GradientText({ gradient, text, className, parentElement } : Props) {
  // Split the text by the underscore character to identify the parts to be highlighted
  const parts = text.split('_');
  
  // Create the text with spans around the highlighted parts
  const renderedText = parts.map((part, index) => {
    // Apply the gradient to every alternate part (which was wrapped in underscores)
    if (index % 2 !== 0) {
      return (
        <span
          key={index}
          style={{
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text', // For Safari compatibility
            backgroundImage: gradient,
          }}
        >
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
      <span
        key="last"
        style={{
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundImage: gradient,
        }}
      >
        {renderedText.pop()}
      </span>
    );
  }

  // Use React.createElement to create the element dynamically
  return React.createElement(
    parentElement,
    { className: className ? className : '' },
    renderedText
  );
};

export default GradientText;