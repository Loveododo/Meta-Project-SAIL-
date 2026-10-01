import HomeHero from "../components/ui/home/HomeHero";
import StoreGrid from "../components/ui/home/StoreGrid";
import WhyBuy from "../components/ui/home/WhyBuy";
import LatestNews from "../components/ui/home/LatestNews";
import Footer from "../static/Footer";

const Home = () => {
  return (
    <div>
      
      <HomeHero />
      <StoreGrid />
      <WhyBuy />
      <LatestNews />
      <Footer />

    </div>
  );
};

export default Home;