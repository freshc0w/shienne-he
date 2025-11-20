import { LinkPreview } from "../ui/link-preview";
import { LinkButton } from "../link-button";
import { Pronunciation } from "./pronunciation";
import { Highlighter } from "../ui/highlighter";

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
          <p>
            I make{" "}
            <Highlighter
              action="highlight"
              iterations={2}
              isView
              color="oklch(0.95 0.05 130)"
              delay={300}
            >
              financial plans
            </Highlighter>{" "}
            feel less overwhelming.
          </p>

          <p>
            At{" "}
            <LinkPreview
              url="https://www.sfg.com.au/"
              isStatic={true}
              imageSrc="/shadforth-website.png"
            >
              <Highlighter
                action="underline"
                color="oklch(0.6 0.08 130)"
                iterations={2}
                isView
                strokeWidth={1}
                delay={300}
              >
                <Highlighter
                  action="highlight"
                  color="oklch(0.95 0.05 130)"
                  iterations={1}
                  isHover
                  animationDuration={500}
                >
                  Shadforth,
                </Highlighter>
              </Highlighter>
            </LinkPreview>{" "}
            I combine advisor training with a{" "}
            <LinkPreview
              url="https://www.uq.edu.au/"
              isStatic={true}
              imageSrc="/graduation.png"
            >
              <Highlighter
                action="underline"
                color="oklch(0.6 0.08 130)"
                iterations={2}
                isView
                strokeWidth={1}
                delay={600}
              >
                <Highlighter
                  action="highlight"
                  color="oklch(0.95 0.05 130)"
                  iterations={1}
                  isHover
                  animationDuration={500}
                >
                  behavioural science
                </Highlighter>
              </Highlighter>
            </LinkPreview>{" "}
            background because I believe good advice starts with{" "}
            <Highlighter
              action="highlight"
              iterations={4}
              isView
              color="oklch(0.95 0.05 130)"
              delay={900}
            >
              actually understanding people.
            </Highlighter>
          </p>
          <div className="pt-8 w-full flex flex-wrap items-center gap-6">
            <LinkButton text="Get in touch" href="#contact" />
            <LinkPreview
              url="https://au.linkedin.com/in/shienne-he-553859171"
              className="text-xl md:text-2xl opacity-60 hover:opacity-100 transition-opacity"
              isStatic={true}
              imageSrc="/linkedin-profile.png"
            >
              <Highlighter
                action="underline"
                color="oklch(0.6 0.08 130)"
                iterations={2}
                isView
                strokeWidth={1}
                delay={1200}
              >
                <Highlighter
                  action="highlight"
                  color="oklch(0.95 0.05 130)"
                  iterations={1}
                  isHover
                  animationDuration={500}
                >
                  Connect with me!
                </Highlighter>
              </Highlighter>
            </LinkPreview>
          </div>
        </div>
      </div>
    </section>
  );
};
