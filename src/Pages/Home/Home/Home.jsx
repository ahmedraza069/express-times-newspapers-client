import AllPublihser from "../AllPublisher/AllPublihser";
import Banner from "../Banner/Banner";
import PricingPlans from "../PricingPlans/PricingPlans";
import TrendingCategory from "../TrendingCategory/TrendingCategory";
import { Helmet } from "react-helmet-async";
import Gallery from '../Gallery/Gallery'
import Stats from "../Stats/Stats";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Express Times | Home</title>
      </Helmet>
      <Banner></Banner>
      <TrendingCategory></TrendingCategory>
      <AllPublihser></AllPublihser>
      <PricingPlans></PricingPlans>
      <Gallery></Gallery>
      <Stats></Stats>

    </div>
  );
};

export default Home;
