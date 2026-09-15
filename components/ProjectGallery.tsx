"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProjectImage from "@/components/ProjectImage";
import type { Project } from "@/data/projects";

type ProjectGalleryProps = {
  images: Project["images"];
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? undefined : images[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((index) => (index === null ? 0 : (index + 1) % images.length));
      if (event.key === "ArrowLeft") setActiveIndex((index) => (index === null ? 0 : (index - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="project-gallery">
        {images.map((image, index) => (
          <button type="button" className={`project-gallery__item ${index === 0 ? "project-gallery__item--featured" : ""}`} key={image.src} onClick={() => setActiveIndex(index)} aria-label={`Open ${image.alt}`}>
            <ProjectImage src={image.src} alt={image.alt} />
            {image.caption && <span>{image.caption}</span>}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={`${activeImage.alt} enlarged`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveIndex(null)}>
            <button type="button" className="lightbox__close" onClick={() => setActiveIndex(null)} aria-label="Close image viewer"><X size={20} /></button>
            {images.length > 1 && <button type="button" className="lightbox__previous" onClick={(event) => { event.stopPropagation(); setActiveIndex((index) => (index === null ? 0 : (index - 1 + images.length) % images.length)); }} aria-label="Previous image"><ChevronLeft /></button>}
            <motion.div className="lightbox__image" initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(event) => event.stopPropagation()}>
              <Image src={activeImage.src} alt={activeImage.alt} fill sizes="90vw" unoptimized />
            </motion.div>
            {images.length > 1 && <button type="button" className="lightbox__next" onClick={(event) => { event.stopPropagation(); setActiveIndex((index) => (index === null ? 0 : (index + 1) % images.length)); }} aria-label="Next image"><ChevronRight /></button>}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
