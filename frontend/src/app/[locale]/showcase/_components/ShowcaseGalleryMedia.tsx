"use client";

import Image from "next/image";
import { useRef } from "react";
import type { AppMedia } from "@/modules/common/media.adapter";

type ShowcaseGalleryMediaProps = {
    item: AppMedia;
};

export function ShowcaseGalleryMedia({ item }: ShowcaseGalleryMediaProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    if (item.mediaType === "photo" && item.image) {
        return (
            <Image
                src={item.image.url}
                alt={item.image.alt}
                width={item.image.dimensions.width}
                height={item.image.dimensions.height}
                placeholder={"blur"}
                blurDataURL={item.image.lqip}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        );
    }

    if (item.mediaType === "video" && item.url) {
        return (
            <video
                ref={videoRef}
                style={{ "--controls": "none" } as React.CSSProperties}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                playsInline
                muted
                loop
                src={item.url}
                onMouseEnter={() => {
                    if (videoRef.current) {
                        videoRef.current.play().catch(() => { });
                    }
                }}
                onMouseLeave={() => {
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }}
                preload="auto"
            >
                <track kind="metadata" label="cuepoints" data-removeondestroy="" />
                <track kind="chapters" label="chapters" data-removeondestroy="" />
            </video>
        );
    }

    return null;
}
