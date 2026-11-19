"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "@phosphor-icons/react";

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
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 2) setReady(true);
  }, []);

  return (
    <div className={`phone-frame relative ${className ?? ""}`}>
      {failed ? (
        <div className="flex aspect-[382/848] flex-col items-start justify-end gap-3 bg-[#181818] p-4">
          <p className="body-6 text-white">Video failed to load. Open the live demo instead.</p>
          <a href="https://bharat-bank.onrender.com" target="_blank" rel="noopener noreferrer" className="btn button-sm">
            Try the live demo
          </a>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="block w-full"
          style={{ aspectRatio: "382 / 848", objectFit: "cover" }}
          playsInline
          controls={playing}
          preload="metadata"
          onLoadedData={() => setReady(true)}
          onError={() => setFailed(true)}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          onEnded={() => setPlaying(false)}
        />
      )}
      {!failed && !ready && <div className="skeleton absolute inset-0" aria-hidden />}
      {!failed && !playing && ready && (
        <button
          type="button"
          onClick={() => {
            void videoRef.current?.play();
          }}
          aria-label="Play the Saarthi demo"
          className="play-hit absolute inset-0 flex items-center justify-center bg-black/20"
        >
          <span className="play-button">
            <Play size={24} weight="fill" />
          </span>
        </button>
      )}
    </div>
  );
}
