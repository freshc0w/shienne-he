import { LinkPreview } from "../ui/link-preview";
import { LinkButton } from "../link-button";
import { Pronunciation } from "./pronunciation";

export const AboutSection = () => {
  return (
    <section id="intro-text" className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 pt-16 md:pt-24">
        <div className="md:w-2/12 text-base md:text-xl pb-3 pt-4">
          [ About Me ]
        </div>
        <div className="md:w-10/12 text-3xl md:text-5xl leading-[1.3] space-y-4">
          <p className="flex flex-wrap items-center gap-3">
            Hi. I'm Shienne.
            <Pronunciation text="Shinnie" phonetic="shin·knee" />
          </p>
          <p>I make financial plans feel less overwhelming.</p>

          <p>
            At{" "}
            <LinkPreview
              url="https://www.sfg.com.au/"
              isStatic={true}
              imageSrc="/shadforth-website.png"
              className="underline"
            >
              Shadforth,
            </LinkPreview>{" "}
            I combine advisor training with a psychology background because I
            believe good advice starts with actually understanding people.
          </p>
          <div className="pt-8 w-full flex">
            <LinkButton text="Get in touch" href="#contact"/>
          </div>
        </div>
      </div>
    </section>
  );
};
