import { useEffect, useRef, useState } from "react";

interface Props {
  target: number,
  duration: number,
  textAfter: string,
}

function NumberIncreaser({ target, duration, textAfter }: Props) {
  const [number, setNumber] = useState<number>(0);
  const ref = useRef(null);
  const increment = Math.ceil(target / duration);

  const options = { threshold: 1 };
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        increaseNumber();
      }
    }
  }, options);

  const increaseNumber = () => {
    // console.log("increaseNumber", number);

    if (number < target) {
      setNumber((prevNumber) => prevNumber + increment);
    } else {
      setNumber(target);
    }
  };

  let timeout: number;
  useEffect(() => {
    if (number !== 0) {
      // console.log("useEffect, number", number);
      // @ts-ignore
      timeout = setTimeout(increaseNumber, 1);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [number]);

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
    <span ref={ref}>
      {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + textAfter}
    </span>
  );
}

export default NumberIncreaser;
