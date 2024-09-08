import { useEffect, useRef } from "react";

interface Props {
  delay: number,
  children: React.ReactNode
}

function ScaleIn({ delay, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.classList.remove('scale-0', 'opacity-0');
        ref.current.classList.add('scale-100', 'opacity-100');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className="transition-all duration-500 scale-0 opacity-0"
    >
      {children}
    </div>
  );
}

export default ScaleIn;
