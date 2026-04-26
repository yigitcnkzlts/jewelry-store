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
import TrustBadges from "../components/ui/TrustBadges";
import VideoSection from "../components/sections/VideoSection";
import RecentlyViewedSection from "../components/sections/RecentlyViewedSection";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <section className="bg-[#fdfbf7] px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TrustBadges />
        </div>
      </section>
      <StatsSection />
      <CategorySection />
      <FeaturedProducts />
      <SignatureCollection />
      <LuxuryBanner />
      <VideoSection />
      <DesignProcess />
      <WhyChooseUs />
      <GallerySection />
      <RecentlyViewedSection />
      <ContactCTA />
    </>
  );
}

export default Home;
