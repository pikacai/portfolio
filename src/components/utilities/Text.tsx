import React, { Fragment } from "react";

interface Props {
  children: React.ReactNode,
  className?: string;
  parentElement: 'h1' | 'h2' | 'h3' | 'p';
}

function Text({ children, className, parentElement } : Props) {
  let fontSizes = {
    'h1': 'text-2xl sm:text-4xl',
    'h2': 'text-xl sm:text-2xl',
    'h3': 'text-lg sm:text-xl',
    'p': 'text-base'
  }

  const finalClassName = `${fontSizes[parentElement]} ${className || ''}`;

  return React.createElement(
    parentElement,
    { className: finalClassName },
    children
  );
};

export default Text;