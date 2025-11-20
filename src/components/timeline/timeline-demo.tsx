import { Timeline } from "@/components/ui/timeline";
import { HERO_FILES, TIMELINE_FILES } from "../../constants";

export function TimelineDemo() {
  const data = [
    {
      title: "2016 - 2017",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-base md:text-lg font-bold text-foreground">
              Customer Service Staff
            </h4>
            <p className="text-sm text-muted-foreground mb-1">KFC</p>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2016 - 2017
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              This is where it all started. My first pocket change and my first
              exposure to angry customers.
            </p>
          </div>
          <img
            src={TIMELINE_FILES.image_5.src}
            alt={TIMELINE_FILES.image_5.alt}
            className="h-32 w-full rounded-lg object-cover md:h-44 lg:h-60"
          />
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-base md:text-lg font-bold text-foreground">
              Graduated High School
            </h4>
            <p className="text-sm text-muted-foreground mb-1">
              Brisbane Christian College
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2018
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Ticked off high school as School Captain and snagged a role in the
              musical. Turns out pretending to be someone else on stage is
              pretty fun.
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src={TIMELINE_FILES.image_1.src}
              alt={TIMELINE_FILES.image_1.alt}
              className="h-32 w-[50%] rounded-lg object-cover md:h-44 lg:h-60 object-top"
            />
            <img
              src={TIMELINE_FILES.image_2.src}
              alt={TIMELINE_FILES.image_2.alt}
              className="h-32 w-[50%] rounded-lg object-cover md:h-44 lg:h-60 object-top"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2020",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-base md:text-lg font-bold text-foreground">
              Summer Host
            </h4>
            <p className="text-sm text-muted-foreground mb-1">
              Mecca Cosmetica · Contract
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2019 - 2020
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Summer gig helping customers find the perfect shade of everything.
              Picked up the basics of retail life—stock counts, admin tasks, and
              the art of keeping shelves looking Instagram-worthy.
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src={TIMELINE_FILES.image_3.src}
              alt={TIMELINE_FILES.image_3.alt}
              className="h-32 w-[50%] rounded-lg object-cover md:h-44 lg:h-60 object-top"
            />
            <img
              src={TIMELINE_FILES.image_4.src}
              alt={TIMELINE_FILES.image_4.alt}
              className="h-32 w-[50%] rounded-lg object-cover md:h-44 lg:h-60 object-top"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-base md:text-lg font-bold text-foreground">
              UQ Psychology Students' Association
            </h4>
            <p className="text-sm text-muted-foreground mb-2">2 years</p>
          </div>
          <div className="mb-6">
            <h5 className="text-sm md:text-base font-semibold text-foreground mb-1">
              First Year Coordinator
            </h5>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2019 - 2020
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Elected by club members to welcome and guide first-years through
              their introduction to university psychology.
            </p>
          </div>
          <div className="mb-4">
            <h5 className="text-sm md:text-base font-semibold text-foreground mb-1">
              Secretary
            </h5>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2020 - 2021
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Right-hand person to the President. Coordinated with a team of 10
              executives and helped organize events for 500+ psychology students
              who were probably analyzing everything I did.
            </p>
          </div>
          <img
            src={TIMELINE_FILES.image_6.src}
            alt={TIMELINE_FILES.image_6.alt}
            className="h-32 w-full rounded-lg object-cover md:h-44 lg:h-60 object-top"
          />
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-base md:text-lg font-bold text-foreground">
              Food Service Worker
            </h4>
            <p className="text-sm text-muted-foreground mb-1">
              Grill'd Healthy Burgers · Part-time
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2020 - 2022
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Leveled up from fried chicken to gourmet burgers. Same customer
              service energy, slightly healthier menu.
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src={TIMELINE_FILES.image_7.src}
              alt={TIMELINE_FILES.image_7.alt}
              className="h-40 rounded-lg object-cover md:h-48 lg:h-68 object-bottom w-[50%]"
            />
            <img
              src={TIMELINE_FILES.image_8.src}
              alt={TIMELINE_FILES.image_8.alt}
              className="h-40 rounded-lg object-cover md:h-48 lg:h-68 object-[0_50%] w-[50%]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-base md:text-lg font-bold text-foreground">
              Private Tutor
            </h4>
            <p className="text-sm text-muted-foreground mb-1">Freelance</p>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2021
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Taught English and History to high school students—one Year 12
              navigating Senior English with learning difficulties, and one Year
              9 determined to boost those grades. Turns out explaining essays is
              harder than writing them.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-base md:text-lg font-bold text-foreground">
              Graduated University
            </h4>
            <p className="text-sm text-muted-foreground mb-1">
              University of Queensland
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2019 - 2022
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Bachelor of Behavioural Sciences. Spent three years learning why
              people do the things they do—then realized I still don't fully
              understand my own behavior.
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src={TIMELINE_FILES.image_10.src}
              alt={TIMELINE_FILES.image_10.alt}
              className="h-32 w-[50%] rounded-lg object-cover object-top md:h-44 lg:h-60"
            />
            <img
              src={TIMELINE_FILES.image_9.src}
              alt={TIMELINE_FILES.image_9.alt}
              className="h-32 w-[50%] rounded-lg object-cover object-top md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - Present",
      content: (
        <div>
          <div className="mb-2">
            <h4 className="text-base md:text-lg font-bold text-foreground">
              Shadforth Financial Group Ltd
            </h4>
            <p className="text-sm text-muted-foreground">Full-time</p>
          </div>
          <div className="mb-6">
            <h5 className="text-sm md:text-base font-semibold text-foreground mb-1">
              Client Services Manager
            </h5>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2022 - 2023
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Jumped into financial advice implementation at Shadforth's
              Brisbane office. Split time between client-facing work and
              behind-the-scenes operations—turns out I like both.
            </p>
          </div>
          <div className="mb-6">
            <h5 className="text-sm md:text-base font-semibold text-foreground mb-1">
              Client Relationship Manager
            </h5>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2023 - 2025
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Managed client relationships and operations. Basically became
              fluent in finance-speak while keeping everyone happy and on track.
            </p>
          </div>
          <div className="mb-4">
            <h5 className="text-sm md:text-base font-semibold text-foreground mb-1">
              Associate Adviser
            </h5>
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              2025 - Present
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Currently helping people make sense of their financial futures and
              hopefully not lose sleep over market movements.
            </p>
          </div>
          <img
            src={HERO_FILES.image_0.src}
            alt={HERO_FILES.image_0.alt}
            className="rounded md:w-[80%] mt-4 object-top object-cover mx-auto"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
