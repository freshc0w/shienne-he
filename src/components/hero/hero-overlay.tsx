import { cn } from "../../lib/utils";

export const HeroOverlay = ({
  className,
  selectedImage,
}: {
  className?: string;
  selectedImage: { src: string; alt: string };
}) => {
  return (
    <div className={cn("bg-black relative", className)}>
      <img
        src={selectedImage.src}
        alt={selectedImage.alt}
        className="w-full h-full object-cover object-center brightness-85 contrast-120 saturate-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
    </div>
  );
};
