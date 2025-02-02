import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "../components/ui/HeroSection";
import WhyChooseUs from "../components/ui/WhyChooseUs";
import TestimonialCards from "../components/TestimonialCards";
import UpcomingWebinar from "./../components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center"></h1>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinar />
      <Instructors />
      <Footer />
    </main>
  );
}
