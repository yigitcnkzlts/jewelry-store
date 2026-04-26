import AnnouncementBar from "../components/sections/AnnouncementBar";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import CategorySection from "../components/sections/CategorySection";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import SignatureCollection from "../components/sections/SignatureCollection";
import LuxuryBanner from "../components/sections/LuxuryBanner";
import DesignProcess from "../components/sections/DesignProcess";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import GallerySection from "../components/sections/GallerySection";
import ContactCTA from "../components/sections/ContactCTA";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <StatsSection />
      <CategorySection />
      <FeaturedProducts />
      <SignatureCollection />
      <LuxuryBanner />
      <DesignProcess />
      <WhyChooseUs />
      <GallerySection />
      <ContactCTA />
    </>
  );
}

export default Home;
