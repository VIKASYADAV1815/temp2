import Hero from "@/components/hero/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/features/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/features/Integrations";
import Performance from "@/components/features/Performance";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Hero />
      <LogoCloud />
      <Features />
      <Integrations />
      <Performance />
      <Testimonials />
      <Pricing />
    </main>
  );
}
