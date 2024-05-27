import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  className?: string;
  alt?: string;
  removeFadeIn?: boolean;
}

function img({ src, className, alt, removeFadeIn }: Props) {
  const [intersected, setIntersected] = useState<boolean>(false);
  const ref = useRef(null);
  let observer: IntersectionObserver;

  useEffect(() => {
    if (ref && ref.current) {
      //@ts-ignore
      ref.current.style.transition = "all 1s ease-in";
      //@ts-ignore
      ref.current.style.opacity = "0";

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!removeFadeIn) {
                //@ts-ignore
                entry.target.style.transform = "translateY(200px)";
  
                setTimeout(() => {
                  //@ts-ignore
                  entry.target.style.opacity = "100";
                  //@ts-ignore
                  entry.target.style.transform = "translateY(0)";
  
                  setIntersected(true);
                  // @ts-ignore
                  observer.unobserve(ref.current);
                }, 200);
              }
              else {
                setIntersected(true);
                // @ts-ignore
                observer.unobserve(ref.current);
              }

            }
          });
        },
        { threshold: 1 } // Adjust as needed
      );

      observer.observe(ref.current);

      // Explicitly preload the image
      const imagePreloadDummy = new Image();
      imagePreloadDummy.src = src;
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <img
      ref={ref}
      className={className}
      loading="lazy"
      src={intersected ? src : ""}
      alt={alt}
      style={{
        height: intersected ? "" : "100%",
        width: intersected ? "" : "100%",
        transition: "opacity 0.5s ease-in-out",
      }}
    />
  );
}

export default img;
