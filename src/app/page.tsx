import { Sidebar } from "@/components/sidebar";
import { Experience } from "@/components/experience";
import { Portfolio } from "@/components/portfolio";
import { Connect } from "@/components/connect";
import { Navbar } from "@/components/navbar";
import { SlideNav } from "@/components/slide-nav";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <SlideNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth focus:outline-none"
      >
        <section
          id="top"
          data-slide
          className="flex h-dvh min-h-dvh snap-start flex-col justify-center overflow-y-auto px-5 pb-8 pt-24 sm:px-8 sm:pt-28"
        >
          <div className="mx-auto w-full max-w-[1160px]">
            <Sidebar />
          </div>
        </section>
        <Portfolio />
        <Experience />
        <Connect />
      </main>
    </>
  );
}
