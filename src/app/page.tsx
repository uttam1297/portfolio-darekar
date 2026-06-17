import { Sidebar } from "@/components/sidebar";
import { Experience } from "@/components/experience";
import { Portfolio } from "@/components/portfolio";
import { Capabilities } from "@/components/capabilities";
import { Tools } from "@/components/tools";
import { Testimonials } from "@/components/testimonials";
import { Connect } from "@/components/connect";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        id="top"
        className="mx-auto max-w-[960px] px-5 pt-[calc(52px+2rem)] pb-8 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-0 md:gap-12 items-start"
      >
        <Sidebar />
        <div className="flex flex-col">
          <Experience />
          <Portfolio />
          <Capabilities />
          <Tools />
          <Testimonials />
          <Connect />
        </div>
      </div>
      <footer className="text-center py-5 text-xs text-muted-foreground">
        © 2025 Uttam Darekar · Berlin · Built with intention
      </footer>
    </>
  );
}
