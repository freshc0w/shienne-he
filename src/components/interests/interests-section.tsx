import { HERO_FILES } from "../../constants";

export const InterestsSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 mb-8 md:mb-16">
        <div className="md:w-2/12 text-base md:text-xl">[ Beyond Work ]</div>
        <div className="md:w-10/12"></div>
      </div>

      <div className="space-y-8 md:space-y-0">
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-6 lg:w-[80%]">
            <img
              src={HERO_FILES.image_8.src}
              alt={HERO_FILES.image_8.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-orange-100/20"></div>
          </div>
          <h3 className="text-2xl md:text-4xl font-medium mb-3">
            Family first
          </h3>
          <p className="text-base md:text-xl text-foreground/60 max-w-2xl">
            My ride-or-die. Everything else is secondary.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:mt-16">
          <div className="group cursor-pointer md:w-5/12">
            <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-3xl overflow-hidden mb-6">
              <img
                src={HERO_FILES.image_1.src}
                alt="Travel and adventure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/20 to-blue-200/20"></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-3">
              Spontaneous escapes
            </h3>
            <p className="text-base md:text-lg text-foreground/60">
              My dream is to accidentally find myself in a new country. <br />Lost... And rich.
            </p>
          </div>

          <div className="group cursor-pointer md:w-7/12 md:mt-24">
            <div className="relative aspect-[4/3] md:aspect-[4/3] rounded-3xl overflow-hidden mb-6">
              <img
                src={HERO_FILES.image_2.src}
                alt="Books and reading"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-emerald-100/20"></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium mb-3">
              Friends
            </h3>
            <p className="text-base md:text-lg text-foreground/60">
              However much they annoy me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
