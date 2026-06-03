import { ReactNode, useState } from "react";

interface Props {
  /** File name inside /public/<dir>/, e.g. "persona.png". */
  file: string;
  alt: string;
  /** Coded fallback shown when the export image is missing. */
  children: ReactNode;
  /** Background applied to the image section. */
  bgClass?: string;
  imgClass?: string;
  /** Public subfolder the export lives in. Defaults to "jukebox". */
  dir?: string;
}

/**
 * Shows the designer's real export (public/jukebox/<file>) when present,
 * otherwise renders the coded fallback section.
 */
export default function SectionExport({
  file,
  alt,
  children,
  bgClass = "",
  imgClass = "mx-auto block w-full max-w-6xl",
  dir = "jukebox",
}: Props) {
  const [fail, setFail] = useState(false);
  if (fail) return <>{children}</>;
  return (
    <section className={bgClass}>
      <img
        src={`${import.meta.env.BASE_URL}${dir}/${file}`}
        alt={alt}
        className={imgClass}
        onError={() => setFail(true)}
      />
    </section>
  );
}
