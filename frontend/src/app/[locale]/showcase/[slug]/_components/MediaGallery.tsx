import Image from "next/image"
import type { AppProject } from "@/modules/showcase/showcase-detail.adapter";

type MediaGalleryProps = { gallery: AppProject["images"] }

export function MediaGallery({ gallery }: MediaGalleryProps) {

  return (
    <div className="space-y-0">
      {gallery.map((item) => (
        <div key={item.image.id} className="relative w-full aspect-3/2 bg-muted py-12">
            <Image
              src={item.image.url}
              alt={item.image.alt}
              width={item.image.dimensions.width}
              height={item.image.dimensions.height}
              className="object-cover"
              placeholder={"blur"}
              blurDataURL={item.image.lqip}
            />
        </div>
      ))}
    </div>
  )
}
