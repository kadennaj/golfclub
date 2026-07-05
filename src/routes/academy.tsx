import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import academyLogo from "../assets/brand/academy-logo.png";
import academyRoom from "../assets/academy/academy-room.jpg";
import academyBays from "../assets/academy/academy-bays.jpg";
import academyBayDark from "../assets/academy/academy-bay-dark.jpg";
import rangeFour from "../assets/academy/range-4.jpg";
import juniorCamp from "../assets/academy/junior-camp.webp";
import donnaNorman from "../assets/academy/donna-norman.jpg";
import allenPanuncio from "../assets/academy/allen-panuncio.jpg";
import robMiceli from "../assets/academy/rob-miceli.jpg";
import corySouthon from "../assets/academy/cory-southon.jpg";
import aileenRobertson from "../assets/academy/aileen-robertson.jpg";
import paulDavies from "../assets/academy/paul-davies.jpg";
import davidRogers from "../assets/academy/david-rogers.jpg";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Academy & Simulators — Richmond Hill Golf Club" },
      {
        name: "description",
        content:
          "CPGA instruction, three Foresight Sports GC Hawk simulators and seasonal clinics at the Richmond Hill Golf Academy.",
      },
      { property: "og:title", content: "Academy — Richmond Hill Golf Club" },
      {
        property: "og:description",
        content:
          "Get your game in shape — private, semi-private, group and junior lessons, year-round.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.richmondhillgolf.com/academy" }],
  }),
  component: AcademyPage,
});

const BOOKING_URL = "https://clients.uschedule.com/richmondhillgolf/booking";
const PAYMENT_URL =
  "https://richmond-hill-golf-club.golfems2.com/event/richmond-hill-golf-club-lesson-payment-senior-instructors";
const INQUIRY_URL = "https://form.jotform.com/80294919284972";
const CAMP_DETAILS_URL = "https://richmondhilldaycamp.com/golf-academy";
const CAMP_REGISTER_URL = "https://richmondhillcountryclubdaycamp.campbrainregistration.com/";

const TEAM = [
  {
    name: "Donna Norman",
    role: "Academy Director",
    email: "dnorman@richmondhillgolf.com",
    phone: "(905) 889-4653 Ext. 448",
    image: donnaNorman,
    bio: [
      "Donna is our Academy Director, a Callaway Professional Staff member, and a Class-A member of the Canadian Professional Golf Association.",
      "A respected member of the Richmond Hill Golf Club family for over 16 years, she brings a wealth of experience, a deep commitment to player development, and a genuine love of the game to her teaching approach",
      "An accomplished and intuitive instructor, Donna is dedicated to helping golfers of all skill levels and aspirations elevate their abilities, embrace the journey of improvement, and realize their full performance potential. Guided by the belief that it is never too young to start and never too late to learn, she creates an inclusive environment and a balanced approach to development—empowering every golfer to learn, grow, and play with confidence.",
      "Recognizing that golf challenges extend beyond technique to include motivation, focus, patience, and resilience, Donna fosters a supportive yet appropriately challenging atmosphere. She guides, encourages, and inspires each player to perform at their best.",
      "Rounded in a philosophy that values growth as much as results, Donna draws inspiration from renowned sports psychologist Dr. Bob Rotella:",
      "“A golfer has to learn to enjoy the process of striving to improve. That process, even more than the end result, enriches our life.”",
    ],
    bag: [
      "Driver – Callaway Quantum Max D 10.5°",
      "Fairway Woods – Callaway Quantum Max D 3-15°, 5-18°, 7-21.5°",
      "Hybrids – Callaway Quantum Fast 5-25°, 6-28°",
      "Irons – Callaway Quantum Max Irons 6-PW, AW",
      "Wedges – Callaway OPUS SP Wedges 54°, 56°, 60°",
      "Putter – Odyssey Square 2 Square Tri-Hot Rossie Single Bend",
    ],
  },
  {
    name: "Allen Panuncio",
    role: "Senior Instructor & Clubfitting Specialist",
    email: "apanuncio@richmondhillgolf.com",
    phone: "(905) 889-4653 Ext. 448",
    image: allenPanuncio,
    bio: [
      "For Allen, golf is more than a profession, it is a lifelong passion for growing the game. With a career spanning 25 years, including 20 years as a sought-after Instructor, Allen has a unique ability to simplify the golf swing and build confidence in his students. His recent work alongside top-tier instructors and club fitters has given him an in-depth understanding of the variables that drive peak performance.",
      "Allen’s inclusive teaching style has empowered everyone from competitive collegiate players, high level Amateurs and those just starting their journey. If you are looking to see the game through a new lens and unlock your true potential, Allen is ready to help you connect with your best golf yet.",
      "Kingdom Certified Fitter",
    ],
    bag: [
      "Driver – TaylorMade Qi4D LS 10.5°",
      "Fairway – TaylorMade Qi4D 15°, 21°",
      "Hybrid – TaylorMade Qi4D 22°",
      "Irons – TaylorMade P770 5-7, P7 CB 8-PW",
      "Wedges – TaylorMade MG5 50°, 54°, 60°",
      "Putter – TaylorMade Spider EX Short Slant",
      "Ball- TP5",
    ],
  },
  {
    name: "Rob Miceli",
    role: "Senior Instructor",
    email: "rmiceli@richmondhillgolf.com",
    phone: "(905) 889-4653 Ext. 448",
    image: robMiceli,
    bio: [
      "A professionally trained communicator with unparalleled positive energy! Robert utilizes industry leading technology to both inform and guide golfers of all ages and abilities. Leading our Junior and Junior Elite programs, Robert has worked with nationally ranked players and can proudly say he’s taken young students from their very first swing to their very first tournament!",
    ],
    bag: [
      "Driver: Cobra AEROJET LS 9° – Mitsubishi Kai’li White XS",
      "3wood: Cobra AEROJET LS 13° – Mitsubishi Kai’li White S",
      "Hybrid: Cobra KING TEC 19° – Mitsubishi MMT S",
      "Irons: Cobra KING MB – KBS Tour 125 S",
      "Wedges: Cobra KING SNAKEBITE – 56° / 60°",
      "Putter: Cobra KING TORINO",
      "Ball: Titleist Pro V1",
    ],
  },
  {
    name: "Cory Southon",
    role: "Senior Instructor",
    email: "csouthon@richmondhillgolf.com",
    phone: "(905) 889-4653 Ext. 448",
    image: corySouthon,
    bio: [
      "Prior to his role here at the Richmond Hill Golf Academy, Cory joined the PGA of Canada in 2011 and spent 9 years coaching alongside/being mentored by Golf Magazine Top 100 Teacher Henry Brunton at Eagles Nest Golf Club. He also spent 3 years successfully serving as the Head Teaching Professional at Whistle Bear Golf Club where his team founded the Ontario Golf Academy.",
      "Cory has distinguished himself as one of the most accomplished modern coaches in the country and has won awards both on a National and Provincial level. He won the PGA of Canada’s Moe Norman Award in 2015, along with being a finalist for the PGA of Ontario’s Junior Leader of the Year Award six times. He’s been an honorable mention for the US Kids Top 50 instructor three times and has been a contributor to multiple instructional publications including a feature in Score Golf Magazine.",
      "He currently coaches many of the top amateur, NCAA/USports, young professional and junior golfers in the country. His students have won over 80 tournaments on various tours including the NCAA, Golf Canada, Golf Ontario, the AGJA, MJT, CJGA and others.",
      "Over the last few seasons his students have won over 20 individual tournaments including the Ontario Junior Boys Amateur, Ontario Super Camp, Golf Canada’s Juvenile (u17) National Championship, the AJGA Coca-Cola Championship, the CJGA Mizuno National Championship along with 8 Maple Leaf Junior Tour events. Many of his students have also gone on to play NCAA golf collegiately at schools such as The University of Michigan, San Jose State, The University of Hartford among dozens of others.",
      "Cory combines his love and passion for playing the game with helping others improve and succeed. He excels in ongoing professional development and specialized training. In addition to completing his PGA of Canada “Class A” training, he has earned certifications with US Kids Golf, Titleist, TrackMan, the PGA of America, and the Certified Golf Coaches Association.",
      "He lives in Toronto with his wife Leslie, daughter Avery and their Boston Terrier Mia!",
    ],
    bag: [
      "Driver – Titleist GT3 10*",
      "Fairway – Titleist GT2 15*",
      "Hybrid -Titleist GT3 21*",
      "Irons – Titleist T150 4-PW",
      "Wedges – Titleist SM11 Vokey 50, 54, 60",
      "Putter – Scotty Cameron Teryllium T22 Newport",
      "Ball – Titleist Pro V1",
    ],
  },
  {
    name: "Aileen Robertson",
    role: "Senior Instructor",
    email: "arobertson@richmondhillgolf.com",
    phone: "(905) 889-4653 Ext. 448",
    image: aileenRobertson,
    bio: [
      "A native of Winnipeg, Manitoba, Aileen Robertson is one of Canada’s premiere female golf coaches as well as one of the top female golfers of her generation in Canada. Aileen possesses an outstanding playing resume. After a stellar junior career where Aileen won two Manitoba Junior Titles and three Manitoba Women’s City and District Championships, Aileen was recruited by the 12th-ranked college women’s golf team at the time, the University of South Carolina. There, she went on to star in NCAA Division I play for the Lady Gamecocks. Aileen won a total of seven provincial amateur championships and a national championship, the Canadian Women’s Amateur. She was a two-time finalist for Manitoba Female Athlete of the Year and was named Manitoba Golfer of the Year and Score Magazine’s Female Amateur of the Year all in one season. Furthermore, she was a member of the Canadian National Women’s Team from 1991 to 1997. During those years, Aileen represented Canada on the international stage in world-class events, including the World Amateur Championship, the Ladies Commonwealth Championship, and the British, New Zealand, Australian, and Mexican Amateur Championships. Professionally, Aileen has won numerous titles, including the PGA of Ontario Ladies Championship, and played in six LPGA tournaments, including two Canadian Women’s Opens, two Australian Women’s Opens, and two Australian Ladies Masters Championships. To recognize her contributions and achievements, Aileen was inducted into the Manitoba Golf Hall of Fame in 2010. A distinguished honor she holds close to her heart.",
      "In 2007, Aileen transitioned into full-time coaching, taking on a role alongside and being mentored by Henry Brunton (Golf Magazine Top 100 Teacher) at Eagles Nest Golf Club. She spent 16 years there honing her skills, training, and developing some of the finest NCAA, amateur, and professional players in Canada. She has devoted a significant amount of time to developing juniors throughout the years and is accomplished at running award-winning programs to help them excel in their golf careers.",
      "Aileen is passionate about sharing her love of the game and combines her extensive playing background and coaching abilities to help players of all levels advance and succeed. In addition to completing her PGA of Canada “Class A” training, she has also earned certification with US Kids Golf, Titleist, Trackman, and Mind Factor mental training.",
    ],
    bag: [
      "Driver – Titleist GT2 11°",
      "Fairway – Titleist GT2 16.5°, 21°",
      "Fairway – Titleist TSR1 23°",
      "Irons – Titleist T150 6-PW, T250 5 Iron",
      "Wedges – Titleist SM11 Vokey Black Finish 48°, 54°, 58°",
      "Putter – Scotty Cameron Phantom X 7.5",
      "Ball – Titleist Pro V1x",
    ],
  },
  {
    name: "Paul Davies",
    role: "Head Professional (Limited Availability)",
    email: "pdavies@richmondhillgolf.com",
    phone: "(905) 889-4653 Ext. 417",
    image: paulDavies,
    bio: [
      "Paul is a Class “A” member of the PGA of Canada and the Richmond Hill Golf Club’s Head Professional. Paul began playing at the age of 6 and golf has been his number one passion ever since the day he started playing this beautiful game. Paul still loves to compete in tournament play and tests his game as much as he can. By playing in CPGA and Great Lakes tour events. After 25 years in the golf business, Paul continues to study the game and brings the highest level of knowledge and experience to all of his students.",
    ],
    bag: [
      "Driver – TaylorMade Qi4D Core 9°",
      "Fairway – TaylorMade Q14D 3-15°, 7-21°",
      "Irons – TaylorMade P7 CB 4 – PW",
      "Wedges – TaylorMade MG5 50°, 56°, 60°",
      "Putter – TaylorMade Spider ZT 38″",
      "Ball – TaylorMade TP5",
    ],
  },
  {
    name: "David Rogers",
    role: "Associate Professional (Limited Availability)",
    email: "drogers@richmondhillgolf.com",
    phone: "(905) 889-4653 Ext. 451",
    image: davidRogers,
    bio: [
      "David Rogers is the Associate Professional at Richmond Hill Golf Club. Over the past 12 years, David has grown within the club-starting in the back shop, progressing to the proshop, and ultimately earning his place in the PGA of Canada in 2023 after successfully passing the Playing Ability Test (PAT).",
      "David has a strong passion for junior development and leads our junior summer camp program, where he helps young golfers build confidence, improve their skills, and develop a lifelong love for the game.",
      "In addition to his teaching and coaching, David is also an experienced club fitter. He brings extensive knowledge of top club manufacturers including Titleist, TaylorMade, Callaway, Ping, and Cobra. David works closely with golfers of all skill levels to ensure their equipment is perfectly fitted to match their swing and playing style, helping them perform their best on the course.",
    ],
    bag: [
      "Driver – Cobra OPTM LS Driver 9°",
      "Mini Driver – Cobra King Tec Mini Driver 13.5°",
      "Fairway – Cobra OPTM LS 17.5°",
      "Irons – Cobra KING Tour Irons 4-PW",
      "Wedges – Cobra KING Wedges 50°, 55°, 60°",
      "Putter – LAB Oz. 1",
      "Ball – Titleist Pro V1x Left Dash",
    ],
  },
];

const TEAM_ORDER = [
  "Donna Norman",
  "Aileen Robertson",
  "Cory Southon",
  "Allen Panuncio",
  "Rob Miceli",
  "Paul Davies",
  "David Rogers",
] as const;

const ORDERED_TEAM = TEAM_ORDER.map((name) => TEAM.find((member) => member.name === name)).filter(
  (member): member is (typeof TEAM)[number] => Boolean(member),
);

function AcademyPage() {
  useReveal();
  return (
    <>
      <PageHero
        kicker="Academy"
        title="Get your game in shape for the new season."
        intro="Dedicated CPGA Certified Instructors.  Here to make you better."
        poster={rangeFour}
        logoSrc={academyLogo}
        logoAlt="Richmond Hill Golf Academy"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-[1480px] gap-14 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="reveal">
            <div className="kicker text-forest mb-4">Instruction</div>
            <h2 className="font-serif text-4xl text-charcoal md:text-6xl">
              Book, pay, or ask the Academy directly.
            </h2>
          </div>
          <div className="reveal grid gap-3 sm:grid-cols-3">
            <a
              className="inline-flex justify-center border border-charcoal bg-charcoal px-5 py-4 text-center text-xs uppercase tracking-[0.24em] text-cream transition-colors hover:bg-forest"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Lesson
            </a>
            <a
              className="inline-flex justify-center border border-charcoal/20 px-5 py-4 text-center text-xs uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-forest hover:text-forest"
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pay for a Lesson
            </a>
            <a
              className="inline-flex justify-center border border-charcoal/20 px-5 py-4 text-center text-xs uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-forest hover:text-forest"
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit an Inquiry
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-[1480px] gap-10 px-5 md:px-10 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              img: rangeFour,
              k: "Private & Small Group Lessons",
              t: "Focused coaching for your swing, your goals.",
              d: "Private, semi-private and small group sessions with CPGA professionals for adults, juniors, beginners and competitive players.",
            },
            {
              img: academyBays,
              k: "Clinics",
              t: "Regular clinics and corporate clinics.",
              d: "Structured group learning for players who want a social format, plus polished corporate clinic experiences for teams and clients.",
            },
            {
              img: academyBayDark,
              k: "GC Hawk Simulators",
              t: "Three Foresight Sports GC Hawks.",
              d: "Each hitting bay is 10 ft high and 15 ft wide for immersive year-round practice, play, lessons and detailed swing feedback.",
            },
            {
              img: academyRoom,
              k: "Club Fitting",
              t: "Equipment tuned to your game.",
              d: "Custom fitting support with experienced professionals who understand leading club manufacturers and how equipment affects performance.",
            },
          ].map((c) => (
            <div key={c.k} className="reveal group">
              <div className="aspect-[4/3] overflow-hidden mb-6 bg-charcoal">
                <img
                  src={c.img}
                  alt={c.t}
                  loading="lazy"
                  className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms]"
                />
              </div>
              <div className="kicker text-forest mb-3">{c.k}</div>
              <h3 className="font-serif text-3xl text-charcoal">{c.t}</h3>
              <p className="mt-3 text-charcoal/65 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            tone="dark"
            kicker="Academy Features"
            title="Built for year-round practice."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-cream/80">
            {[
              "Sheltered outdoor hitting stations",
              "Indoor and outdoor putting green",
              "Practice bunker",
              "1,500 sq ft heated indoor facility",
              "Demos and custom clubfitting",
              "3 Foresight Sports GC Hawk simulators",
              "Training aids and video feedback",
              "On-course lessons",
            ].map((t) => (
              <div key={t} className="reveal border-t border-cream/15 pt-6">
                <div className="font-serif text-xl text-cream">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading
            kicker="The Team"
            title="CPGA professionals, every learning style."
            intro="For general inquiries: academy@richmondhillgolf.com"
            className="mb-14"
          />
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {ORDERED_TEAM.map((m) => (
              <div key={m.email} className="reveal border-t border-charcoal/15 pt-6">
                <div className="flex items-start gap-5">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-20 w-20 shrink-0 rounded-full border border-charcoal/10 object-cover shadow-sm md:h-24 md:w-24"
                  />
                  <div className="min-w-0">
                    <div className="font-serif text-2xl text-charcoal">{m.name}</div>
                    <div className="kicker text-forest mt-2">{m.role}</div>
                    <div className="mt-3 flex flex-col gap-1 text-sm text-charcoal/65">
                      <a href={`mailto:${m.email}`} className="hover:text-forest transition-colors">
                        {m.email}
                      </a>
                      <span>{m.phone}</span>
                    </div>
                  </div>
                </div>
                <details className="group mt-5 border-t border-charcoal/10 pt-4">
                  <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.24em] text-charcoal transition-colors hover:text-forest">
                    View Bio
                  </summary>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-charcoal/68">
                    {m.bio.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    <div className="pt-2">
                      <div className="kicker text-forest mb-3">What’s in the Bag?</div>
                      <ul className="space-y-1">
                        {m.bag.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-cream py-28 md:py-36">
        <div className="mx-auto max-w-[1480px] px-5 md:px-10">
          <SectionHeading tone="dark" kicker="2026 Lesson Rates" title="Spring/summer pricing." />
          <div className="mt-12 grid gap-10 md:grid-cols-3 text-cream/85">
            {[
              { t: "Adult ½ Hour", p: "$80", note: "6-pack $450 · 12-pack $840" },
              {
                t: "Adult 1 Hour",
                p: "$145",
                note: "6-pack $810 · 12-pack $1,500 · 24-pack $2,880",
              },
              {
                t: "Junior 1 Hour",
                p: "$125",
                note: "Ages 18 & under · 6-pack $690 · 12-pack $1,260",
              },
              { t: "Semi-Private (2:1)", p: "$85 / person", note: "1 hour · 6-pack $480" },
              { t: "Small Group (3:1)", p: "$65 / person", note: "1 hour · 6-pack $360" },
              { t: "Junior Group (3:1)", p: "$55 / person", note: "1 hour · 6-pack $300" },
            ].map((r) => (
              <div key={r.t} className="reveal border-t border-cream/15 pt-6">
                <div className="kicker text-gold mb-2">{r.t}</div>
                <div className="font-serif text-3xl">{r.p}</div>
                <p className="mt-2 text-sm text-cream/70">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-cream/55 text-sm max-w-2xl">
            All lesson packages are non-refundable but have no expiry date. HST excluded. We do not
            accept cash. To book:{" "}
            <a
              className="text-gold hover:text-cream transition-colors"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              book online
            </a>{" "}
            or call (905) 889-4653 ext.448.
          </p>
        </div>
      </section>

      <section className="bg-cream py-28 md:py-36">
        <div className="mx-auto grid max-w-[1480px] gap-14 px-5 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="reveal overflow-hidden">
            <img
              src={juniorCamp}
              alt="Summer junior golf camp"
              loading="lazy"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
          <div className="reveal">
            <div className="kicker text-forest mb-4">2026 Summer Junior Golf Camp</div>
            <h2 className="font-serif text-4xl text-charcoal md:text-6xl">
              Half-day golf, half-day camp.
            </h2>
            <div className="mt-6 space-y-4 text-charcoal/68 leading-relaxed">
              <p>
                In conjunction with the Richmond Hill Country Club Day Camp, our Golf Academy offers
                a summer junior golf camp that provides the best of both worlds, a half day of golf
                instruction, coupled with a half day of multi-sports activities!
              </p>
              <p>
                Our Golf Camp is designed for junior golfers who have completed grade 1 through
                grade 7 and are either brand new to the game of golf or have some experience and are
                looking to advance their skills to the next level. Golf instruction takes place for
                3 hours each day with the other half of the day spent participating in various
                sports as well as a daily recreational swim. Lunch and snacks are included in all
                our camp programs.
              </p>
              <p>
                Each 2 week summer camp session will cover all of the key fundamentals of golf
                including, grip, stance, posture & alignment. All major swing aspects including full
                swing, chipping, putting and bunker play will be covered thoroughly. Our CPGA
                instructors will conduct a daily review in the rules of golf and course etiquette to
                get campers comfortable for when they are ready to hit the links on their own.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["9:30 - 12:00", "Golf Instruction with our Pros"],
                ["12:00 - 12:30", "Lunch (included in our fees)"],
                ["12:30 - 3:00", "Multi-sports activities"],
                ["3:00 - 3:35", "Recreational Swim"],
                ["3:35 - 4:05", "Change, Snack and Dismissal"],
              ].map(([time, label]) => (
                <div key={time} className="border-t border-charcoal/15 pt-4">
                  <div className="font-serif text-xl text-charcoal">{time}</div>
                  <div className="mt-1 text-sm text-charcoal/60">{label}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-charcoal/55">
              *The schedule typically alternates daily with golf instruction taking place in the
              afternoon every other day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CAMP_DETAILS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-charcoal bg-charcoal px-5 py-4 text-xs uppercase tracking-[0.24em] text-cream transition-colors hover:bg-forest"
              >
                More Details
              </a>
              <a
                href={CAMP_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center border border-charcoal/20 px-5 py-4 text-xs uppercase tracking-[0.24em] text-charcoal transition-colors hover:border-forest hover:text-forest"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
