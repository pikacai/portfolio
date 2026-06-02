import { useState } from "react";

interface Props {
  staticImage: string;
  gifImage: string;
}

function HoverImage({ staticImage, gifImage }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-64 sm:h-80 p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static Image */}
      <img
        src={staticImage}
        className={`p-8 absolute top-0 left-0 w-full h-full object-scale-down transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        alt="Static"
      />

      {/* GIF Image */}
      <img
        src={gifImage}
        className={`p-8 absolute top-0 left-0 w-full h-full object-scale-down transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        alt="GIF"
      />
    </div>
  );
}

export default HoverImage;
