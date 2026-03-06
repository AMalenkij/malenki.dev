import { cn } from "@/lib/utils";

interface DiagonalLinesProps {
  /**
   * Color of the line
   */
  color?: string;

  /**
   * Spacing between lines
   */
  spacing?: number;

  /**
   * Content of the component
   */
  children?: React.ReactNode;

  /**
   * Additional classes
   */
  className?: string;

  /**
   * Optional CSS maskImage property string to create fading effects
   */
  maskImage?: string;
}

export default function DiagonalLines({
  color = "#707070ff",
  spacing = 8,
  children,
  className,
  maskImage,
}: DiagonalLinesProps) {
  return (
    <div className={cn("w-full h-full", className)}>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg,
                  ${color} 0,
                  ${color} 0.5px,
                  transparent 0,
                  transparent 50%)`,
          backgroundSize: `${spacing}px ${spacing}px`,
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      >
        {children}
      </div>
    </div>
  );
}
