import Hero from "@/components/hero/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/features/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <LogoCloud />
      <Features />
      <Testimonials />
      <Pricing />
    </main>
  );
}
