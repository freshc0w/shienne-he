import { cn } from "../../lib/utils";

export const HeroOverlay = ({ className }: { className?: string }) => {
  return <div className={cn("bg-black", className)}></div>;
};
