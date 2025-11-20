import { InteractiveGridPatternDemo } from "./interactive-grid-pattern-demo";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container mx-auto px-4 md:px-6 py-2 md:py-4"
    >
      <div className="flex flex-col gap-4 md:gap-2 mb-8 md:mb-16">
        <InteractiveGridPatternDemo />
      </div>
    </section>
  );
};
