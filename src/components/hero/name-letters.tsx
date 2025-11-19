import { Letter } from "./letter";
import { IMAGES } from "../../constants";

type ImageType = { src: string; alt: string };

type NameLettersProps = {
  letterDelayOffset: number;
  onImageChange: (image: ImageType) => void;
  defaultImage: ImageType;
  scrollScale: number;
};

const letterConfigs = [
  { letter: "s", delay: 1.0, image: IMAGES.image_1 },
  { letter: "h", delay: 1.1, image: IMAGES.image_2 },
  { letter: "i", delay: 1.2, image: IMAGES.image_3 },
  { letter: "e", delay: 1.3, image: IMAGES.image_4 },
  { letter: "n", delay: 1.4, image: IMAGES.image_6 },
  { letter: "n", delay: 1.5, image: IMAGES.image_7 },
  { letter: "e", delay: 1.6, image: IMAGES.image_8 },
  { letter: "n", delay: 1.7, image: IMAGES.image_9, hidden: true },
  { letter: "h", delay: 1.8, image: IMAGES.image_9 },
  { letter: "e", delay: 1.9, image: IMAGES.image_9 },
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

