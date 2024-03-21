import WhyUs from "@/components/WhyUs/WhyUs";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctor from "@/components/ui/HomePage/TopRatedDoctor/TopRatedDoctor";

const page = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctor />
      <WhyUs />
    </>
  );
};

export default page;
