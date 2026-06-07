import Header from "@/components/marq/Header";
import Hero from "@/components/marq/Hero";
import About from "@/components/marq/About";
import PropertyTypes from "@/components/marq/PropertyTypes";
import Services from "@/components/marq/Services";
import WhyMarq from "@/components/marq/WhyMarq";
import Featured from "@/components/marq/Featured";
import HowToConnect from "@/components/marq/HowToConnect";
import PropertyEnquiry from "@/components/marq/PropertyEnquiry";
import AdvisorForm from "@/components/marq/AdvisorForm";
import Testimonials from "@/components/marq/Testimonials";
import InstaFeed from "@/components/marq/InstaFeed";
import Footer from "@/components/marq/Footer";

export default function Home() {
  return (
    <div data-testid="marq-home" className="bg-[var(--marq-ivory)]">
      <Header />
      <main>
        <Hero />
        <About />
        <PropertyTypes />
        <Services />
        <WhyMarq />
        <Featured />
        <PropertyEnquiry />
        <HowToConnect />
        <AdvisorForm />
        <Testimonials />
        <InstaFeed />
      </main>
      <Footer />
    </div>
  );
}
