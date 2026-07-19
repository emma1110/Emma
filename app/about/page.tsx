import type { Metadata } from "next";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/nav/Navbar";

export const metadata: Metadata = {
  title: "About me | Emma — Product Designer",
  description:
    "Learn more about Emma's design experience, creative practice, and life outside product design.",
};

const experience = [
  {
    period: "OCT 2018 - APRIL 2021",
    role: "Graphic Design",
    company: "Greentours",
    location: "Hanoi, Vietnam",
  },
  {
    period: "MAY 2021 - AUG 2021",
    role: "UI/UX Designer Intern (Remote)",
    company: "Bowntie",
    location: "California, US",
  },
  {
    period: "SEP 2021 - JUL 2025",
    role: "Product Designer (Remote)",
    company: "Novum Global",
    location: "Singapore",
  },
  {
    period: "JUL 2025 - CURRENT",
    role: "Product Designer",
    company: "C’Lab",
    location: "Hanoi, Vietnam",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[var(--bg-color)] transition-colors duration-300">
      <Navbar />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 py-10 sm:px-8 sm:py-16 lg:px-[80px] lg:py-[80px]">
        <h1 className="type-display-xl text-center text-[var(--color-text-inverse)]" data-entrance>
          About me
        </h1>

        <div className="flex flex-col">
          <section className="grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-[minmax(0,744px)_minmax(360px,1fr)] lg:gap-[98px] lg:py-[var(--spacing-20)]" data-reveal>
            <div className="flex flex-col gap-6 sm:gap-8">
              <h2 className="type-heading-h2 text-[var(--color-text-inverse)]">
                I believe every great product begins with understanding people.
              </h2>
              <div className="type-heading-h6 flex flex-col gap-2 text-[var(--color-text-inverse)]">
                <p>That belief shapes both my work and my life.</p>
                <p>
                  As a Product Designer, I enjoy simplifying complex systems into
                  experiences that feel clear and intuitive.
                </p>
              </div>
            </div>

            <div className="relative mx-auto h-[430px] w-full max-w-[428px] sm:h-[520px] lg:h-[573px]">
              <div className="absolute inset-x-0 bottom-0 top-[58px] rounded-[24px] bg-[var(--color-surface-elevated)] sm:top-[75px]" />

              <div className="absolute left-2 top-8 z-20 rounded-[6px] bg-[var(--case-study-card-bg)] p-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.12)] sm:left-[26px] sm:top-10 sm:p-[7px]">
                <img
                  src="/images/about-sticker-4.png"
                  alt="Be yourself poster"
                  className="h-[104px] w-[104px] rounded-[4px] object-cover sm:h-[132px] sm:w-[132px]"
                  width="155"
                  height="155"
                />
              </div>

              <div className="absolute right-2 top-0 z-20 rounded-[6px] bg-[var(--case-study-card-bg)] p-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.12)] sm:right-[25px] sm:-top-2 sm:p-[7px]">
                <img
                  src="/images/about-sticker-1.png"
                  alt="You are the artist of your own life poster"
                  className="h-[104px] w-[104px] rounded-[4px] object-cover sm:h-[132px] sm:w-[132px]"
                  width="155"
                  height="155"
                />
              </div>

              <img
                src="/images/about-portrait.png"
                alt="Emma working on a laptop"
                className="absolute bottom-0 left-1/2 z-30 h-[390px] w-auto max-w-none -translate-x-1/2 object-contain sm:h-[480px] lg:h-[573px]"
                width="403"
                height="573"
                loading="eager"
                decoding="async"
              />
            </div>
          </section>

          <section className="flex flex-col gap-4 py-10 sm:gap-8 sm:py-16 lg:py-[var(--spacing-20)]" data-reveal>
            <h2 className="type-heading-h2 text-[var(--color-text-inverse)]">Experience</h2>
            <div className="flex flex-col">
              {experience.map((item) => (
                <div
                  key={`${item.period}-${item.company}`}
                  className="type-heading-h6 grid grid-cols-1 gap-2 border-b border-solid border-[var(--color-border-default)] py-6 !font-medium text-[var(--color-text-inverse)] sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:items-center lg:gap-8 lg:py-8"
                >
                  <p className="whitespace-nowrap">{item.period}</p>
                  <p>{item.role}</p>
                  <p className="!font-bold">{item.company}</p>
                  <p>{item.location}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-[minmax(0,619px)_minmax(360px,1fr)] lg:gap-[143px] lg:py-[var(--spacing-20)]" data-reveal>
            <div className="flex flex-col gap-6 sm:gap-8">
              <h2 className="type-heading-h2 text-[var(--color-text-inverse)]">Life at home</h2>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3 text-[18px] font-medium leading-7 tracking-normal text-[var(--color-text-inverse)]">
                  <p>
                    Outside of design, I write fiction, read widely, sketch ideas,
                    and travel through rural Vietnam, documenting everyday life
                    through short films.
                  </p>
                  <p>
                    I&apos;m drawn to the quiet moments people often overlook, because
                    they reveal how we live, connect, and make sense of the world.
                  </p>
                  <p>
                    Whether I&apos;m designing a product or writing a story, I&apos;m
                    always trying to understand people a little better.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.royalroad.com/fiction/115653/the-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-heading-h6 group inline-flex items-center gap-2 text-[var(--color-text-inverse)] transition-opacity hover:opacity-60"
                  >
                    Read my novel
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <img
              src="/images/about-home.jpg"
              alt="Rice terraces and village homes in rural Vietnam"
              className="aspect-[508/384] h-auto w-full rounded-[24px] object-cover lg:aspect-auto lg:h-full lg:min-h-[440px]"
              width="508"
              height="384"
              loading="lazy"
              decoding="async"
            />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
