"use client";

import { useRef, useState } from "react";

export default function DemoVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`phone-frame relative ${className ?? ""}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="block w-full"
        style={{ aspectRatio: "382 / 848", objectFit: "cover" }}
        playsInline
        controls={playing}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={toggle}
          aria-label="Play the Saarthi demo video"
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.22)" }}
        >
          <span className="play-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#140a10">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
