import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  highlightColor: string;
}

function Highlight({ text, highlightColor }: Props) {
  const [intersected, setIntersected] = useState<boolean>(false);

  const ref = useRef(null);

  const options = { threshold: 1 };
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setIntersected(true);
      }
    }
  }, options);

  useEffect(() => {
    if (ref && ref.current) {
      // @ts-ignore
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`transition-all ${intersected ? "bg-[left_bottom]" : "text-black bg-[right_bottom]"}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${highlightColor} 50%, white 50%)`,
        backgroundSize: "200% 100%",
        backgroundRepeat: "repeat",
        backgroundAttachment: "scroll",
        backgroundOrigin: "padding-box",
        backgroundClip: "border-box",
        backgroundColor: "transparent",
      }}
    >
      &nbsp;{text}&nbsp;
    </span>
  );
}

export default Highlight;
