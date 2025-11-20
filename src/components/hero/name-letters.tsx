import { Letter } from "./letter";
import { HERO_FILES } from "../../constants";

type MediaType = { src: string; alt: string; type: "image" | "video" };

type NameLettersProps = {
  letterDelayOffset: number;
  onImageChange: (media: MediaType) => void;
  defaultImage: MediaType;
  scrollScale: number;
};

const letterConfigs = [
  { letter: "s", delay: 1.0, image: HERO_FILES.image_1 },
  { letter: "h", delay: 1.1, image: HERO_FILES.image_2 },
  { letter: "i", delay: 1.2, image: HERO_FILES.image_3 },
  { letter: "e", delay: 1.3, image: HERO_FILES.image_9 },
  { letter: "n", delay: 1.4, image: HERO_FILES.video_5 },
  { letter: "n", delay: 1.5, image: HERO_FILES.image_6 },
  { letter: "e", delay: 1.6, image: HERO_FILES.image_7 },
  { letter: "n", delay: 1.7, image: HERO_FILES.image_0, hidden: true },
  { letter: "h", delay: 1.8, image: HERO_FILES.image_8 },
  { letter: "e", delay: 1.9, image: HERO_FILES.image_4 },
];

export const NameLetters = ({
  letterDelayOffset,
  onImageChange,
  defaultImage,
  scrollScale,
}: NameLettersProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full text-white">
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          transform: `scale(${scrollScale}) translateZ(0px)`,
          transformOrigin: "center bottom",
        }}
      >
        <div className="intro-title font-brandon font-bold w-full flex justify-center">
          {letterConfigs.map((config, index) => (
            <Letter
              key={`letter-${index}`}
              letter={config.letter}
              delay={config.delay + letterDelayOffset}
              hidden={config.hidden}
              onMouseEnter={() => onImageChange(config.image)}
              onMouseLeave={() => onImageChange(defaultImage)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
