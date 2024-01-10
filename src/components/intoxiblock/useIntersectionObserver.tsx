import { useEffect } from "react";

/**
 * 
 *
 */
function useIntersectionObserver() {
  const options = { threshold: 1 };
  const observer = new IntersectionObserver( (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // console.log(entry.target.style);
        //@ts-ignore
        entry.target.style.opacity = "100";
        //@ts-ignore
        entry.target.style.transform = "translateY(0)";
      }
    }
  }, options);

  const observeChildren = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.querySelectorAll("img");
      ref.current.childNodes.forEach( (child) => {
        observer.observe(child as HTMLElement);
        //@ts-ignore
        child.style.transition = "all 1s ease-in";
        //@ts-ignore
        child.style.opacity = "0";
        //@ts-ignore
        child.style.transform = "translateY(200px)";
      });
    }
  }

  return {
   observeChildren: observeChildren 
  }
}

export default useIntersectionObserver;
