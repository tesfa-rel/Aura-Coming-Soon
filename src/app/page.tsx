import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ScheduleSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
