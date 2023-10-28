import { useRef, useState } from "react";

interface Props {
  src: any,
}

function ImageDetail({ src }: Props) {
  const [top, setTop] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);

  const handleDisplayImage = () => {
    if (show) {
      document.body.style.removeProperty("overflow");
      setShow(false);
    } else {
      document.body.style.overflow = "hidden";
      setTop(window.scrollY + window.innerHeight / 2);
      setShow(true);
    }
  };

  return (
    <>
      <div className="cursor-pointer" onClick={handleDisplayImage}>
        {src}
      </div>
      <div
        className="absolute h-screen w-screen bg-black flex justify-center items-center bg-opacity-50 transition-opacity delay-[250ms]" 
        onClick={handleDisplayImage}
        style={{
          transform: "translate(0, -50%)",
          left: 0,
          top: top,
          opacity: show ? 1.0 : 0.0,
          zIndex: show ? 1 : -10
        }}
      >
        <div className='max-h-[90vh] max-w-[90vw]'>{src}</div>
      </div>
    </>
  );
}

export default ImageDetail;
