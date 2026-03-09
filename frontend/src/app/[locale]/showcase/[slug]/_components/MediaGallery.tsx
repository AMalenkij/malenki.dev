"use client";

import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { AppProject } from "@/modules/showcase/showcase-detail.adapter";

type ViewMode = "list" | "grid";
type MediaGalleryProps = { gallery: AppProject["media"] };

export function MediaGallery({ gallery }: MediaGalleryProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* View Toggle */}
      {gallery && gallery.length > 0 && (
        <div className="flex justify-end items-center mb-2">
          <div className="flex items-center rounded-md border border-border bg-muted/30 p-1 shrink-0">
            <Button
              onClick={() => setViewMode("list")}
              variant="ghost"
              size="icon-sm"
              className={
                viewMode === "list"
                  ? "bg-background text-foreground shadow-sm hover:bg-background hover:text-foreground focus-visible:ring-1"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }
              aria-label="List view"
            >
              <List className="size-4" />
            </Button>
            <Button
              onClick={() => setViewMode("grid")}
              variant="ghost"
              size="icon-sm"
              className={
                viewMode === "grid"
                  ? "bg-background text-foreground shadow-sm hover:bg-background hover:text-foreground focus-visible:ring-1"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }
              aria-label="Grid view"
            >
              <LayoutGrid className="size-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Gallery Content */}
      <div
        className={
          viewMode === "list"
            ? "space-y-0"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
        {gallery?.map((item) => (
          <div
            key={item.mediaType === "photo" ? item.image.id : item.url}
            className={
              viewMode === "list"
                ? "relative w-full py-12"
                : "relative w-full aspect-video bg-muted border border-border rounded-xl overflow-hidden"
            }
          >
            {item.mediaType === "photo" && item.image && (
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={item.image.dimensions.width}
                height={item.image.dimensions.height}
                className="object-cover w-full h-full"
                placeholder={"blur"}
                blurDataURL={item.image.lqip}
              />
            )}
            {item.mediaType === "video" && item.url && (
              <video
                src={item.url}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
