import { cn } from "../../lib/utils";

export const Letter = ({
  letter,
  onMouseEnter,
  hidden,
}: {
  letter: string;
  onMouseEnter: () => void;
  hidden?: boolean;
}) => {
  return (
    <span
      onMouseEnter={onMouseEnter}
      className={cn(
        "transition-all duration-500",
        hidden ? "opacity-0 text-[10vw]" : "opacity-100",
        "hover:[-webkit-text-stroke:8px_white] hover:[text-stroke:8px_white] hover:[-webkit-text-fill-color:transparent] hover:[text-fill-color:transparent]",
      )}
    >
      {letter}
    </span>
  );
};
