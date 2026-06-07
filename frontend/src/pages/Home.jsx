import Header from "@/components/marq/Header";
import Hero from "@/components/marq/Hero";
import HowToConnect from "@/components/marq/HowToConnect";
import About from "@/components/marq/About";
import Services from "@/components/marq/Services";
import WhyMarq from "@/components/marq/WhyMarq";
import PropertyTypes from "@/components/marq/PropertyTypes";
import PropertyEnquiry from "@/components/marq/PropertyEnquiry";
import Featured from "@/components/marq/Featured";
import AdvisorForm from "@/components/marq/AdvisorForm";
import Testimonials from "@/components/marq/Testimonials";
import Footer from "@/components/marq/Footer";

export default function Home() {
  return (
    <div data-testid="marq-home" className="bg-[var(--marq-ivory)]">
      <Header />
      <main>
        <Hero />
        <HowToConnect />
        <About />
        <Services />
        <WhyMarq />
        <PropertyTypes />
        <PropertyEnquiry />
        <Featured />
        <AdvisorForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
