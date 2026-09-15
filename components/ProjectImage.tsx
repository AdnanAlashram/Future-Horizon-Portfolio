"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
  src?: string;
  alt: string;
  className?: string;
};

export default function ProjectImage({ src, alt, className }: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const hasSource = Boolean(src) && !imageError;

  if (!hasSource) {
    return (
      <div className={`project-image project-image--placeholder ${className ?? ""}`.trim()} aria-label={alt}>
        <span>Screenshot pending</span>
      </div>
    );
  }

  return (
    <div className={`project-image ${className ?? ""}`.trim()}>
      <Image
        src={src as string}
        alt={alt}
        fill
        unoptimized
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
