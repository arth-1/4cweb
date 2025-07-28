"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface DraggableImageGalleryProps {
  images: string[];
}

export function DraggableImageGallery({ images }: DraggableImageGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let autoScrollInterval: NodeJS.Timeout;
    let isAutoScrolling = true;

    // Auto-scroll functionality
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        if (!isAutoScrolling) return;
        
        const currentPercentage = parseFloat(track.dataset.percentage || "0");
        const nextPercentage = currentPercentage - 0.3; // Slower auto-scroll
        
        // Reset when reaching end for seamless loop
        if (nextPercentage <= -100) {
          track.dataset.percentage = "0";
          track.dataset.prevPercentage = "0";
        } else {
          track.dataset.percentage = nextPercentage.toString();
        }
        
        track.animate({
          transform: `translate(${parseFloat(track.dataset.percentage)}%, -50%)`
        }, { duration: 1200, fill: "forwards" });
        
        for(const image of track.getElementsByClassName("image")) {
          (image as HTMLElement).animate({
            objectPosition: `${100 + parseFloat(track.dataset.percentage)}% center`
          }, { duration: 1200, fill: "forwards" });
        }
      }, 100); // Smooth intervals
    };

    const handleOnDown = (clientX: number) => {
      track.dataset.mouseDownAt = clientX.toString();
      isAutoScrolling = false;
      clearInterval(autoScrollInterval);
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";  
      track.dataset.prevPercentage = track.dataset.percentage || "0";
      // Resume auto-scroll after 3 seconds
      setTimeout(() => {
        isAutoScrolling = true;
        startAutoScroll();
      }, 3000);
    };

    const handleOnMove = (clientX: number) => {
      if(track.dataset.mouseDownAt === "0") return;
      
      const mouseDelta = parseFloat(track.dataset.mouseDownAt || "0") - clientX;
      const maxDelta = window.innerWidth / 2;
      
      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage || "0") + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      
      track.dataset.percentage = nextPercentage.toString();
      
      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
      
      for(const image of track.getElementsByClassName("image")) {
        (image as HTMLElement).animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    };

    // Mouse events
    const onMouseDown = (e: MouseEvent) => handleOnDown(e.clientX);
    const onMouseUp = () => handleOnUp();
    const onMouseMove = (e: MouseEvent) => handleOnMove(e.clientX);

    // Touch events  
    const onTouchStart = (e: TouchEvent) => handleOnDown(e.touches[0].clientX);
    const onTouchEnd = () => handleOnUp();
    const onTouchMove = (e: TouchEvent) => handleOnMove(e.touches[0].clientX);

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove);

    // Start auto-scroll
    startAutoScroll();

    return () => {
      clearInterval(autoScrollInterval);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div className="w-full h-[60vh] overflow-hidden relative rounded-lg bg-transparent">
      <div
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
        data-percentage="0"
        className="flex gap-[4vmin] absolute left-1/2 top-1/2 transform translate-x-0 -translate-y-1/2 select-none"
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            width={400}
            height={560}
            className="image w-[40vmin] h-[56vmin] object-cover object-[100%_center]"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}