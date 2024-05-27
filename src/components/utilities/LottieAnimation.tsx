/**
 * Wrapper component used to interact with LottieFiles
 * @component
 * @property
 */

import lottie, { AnimationItem } from "lottie-web";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: any,
  className?: string,
  startingFrame?: number
}

function LottieAnimation({ className, startingFrame, src }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState<AnimationItem>();

  useEffect(() => {
    // Last condition set because this can render 2 animations.
    if (ref && ref.current && ref.current.children.length === 0) {
      setAnimation(
        lottie.loadAnimation({
          container: ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: src,
        })
      );
    }
  }, []);

  useEffect(() => {
    animation?.goToAndStop(startingFrame ? startingFrame : 0, true);
  }, [animation]);

  const handleMouseOver = () => {
    animation?.play();
  };

  const handleMouseLeave = () => {
    animation?.pause();
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
}

export default LottieAnimation;
