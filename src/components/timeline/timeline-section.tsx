import { TimelineDemo } from "./timeline-demo";

export const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className="container mx-auto px-4 md:px-6 py-12 md:py-16"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 mb-8 md:mb-16">
        <div className="md:w-2/12 text-base md:text-xl">[ Timeline ]</div>
        <div className="md:w-10/12">
          <TimelineDemo />
        </div>
      </div>
    </section>
  );
};
