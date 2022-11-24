import AvailableCars from '../components/AvailableCars';
import Banner from '../components/Banner';
import CategoriesSection from '../components/CategoriesSection';
import FeaturesSection from '../components/FeaturesSection';

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <CategoriesSection />
      <AvailableCars />
    </div>
  );
};

export default Home;
