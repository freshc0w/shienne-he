import { CustomCursor } from "./custom-cursor";
import { NameLetters } from "./name-letters";

type MediaType = {
  image(image: any): void; src: string; alt: string; type: "image" | "video" 
};

type ScrollPromptProps = {
  showCustomCursor: boolean;
  onCursorChange: (show: boolean) => void;
  onImageChange: (media: MediaType) => void;
  defaultImage: MediaType;
  scrollScale: number;
  letterDelayOffset: number;
};

export const ScrollPrompt = ({
  showCustomCursor,
  onCursorChange,
  onImageChange,
  defaultImage,
  scrollScale,
  letterDelayOffset,
}: ScrollPromptProps) => {
  return (
    <>
      <CustomCursor isVisible={showCustomCursor} />
      <a
        href="#intro-text"
        className="absolute bottom-0 h-[70%] w-full left-0 z-10 border-none bg-transparent text-inherit no-underline outline-none cursor-none"
        style={{
          scrollBehavior: "smooth",
          color: "inherit",
          textDecoration: "none",
          background: "transparent",
          outline: "none",
        }}
        onMouseEnter={() => onCursorChange(true)}
        onMouseLeave={() => onCursorChange(false)}
      >
        <NameLetters
          letterDelayOffset={letterDelayOffset}
          onImageChange={onImageChange}
          defaultImage={defaultImage}
          scrollScale={scrollScale}
        />
      </a>
    </>
  );
};

