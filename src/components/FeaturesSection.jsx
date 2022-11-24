import feature1 from '../assets/feature logos/1.png';
import feature2 from '../assets/feature logos/2.png';
import feature3 from '../assets/feature logos/3.png';
import feature4 from '../assets/feature logos/4.png';

const FeaturesSection = () => {
  return (
    <div className="py-7 bg=[#f5f5f5]">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img className="mx-auto" src={feature1} width={100} alt="" />
          <h3 className="text-center font-bold text-2xl">Latest Cars</h3>
        </div>
        <div>
          <img className="mx-auto" src={feature2} width={100} alt="" />
          <h3 className="text-center font-bold text-2xl">Low Odometer</h3>
        </div>
        <div>
          <img className="mx-auto" src={feature3} width={100} alt="" />
          <h3 className="text-center font-bold text-2xl">Original Engine</h3>
        </div>
        <div>
          <img className="mx-auto" src={feature4} width={100} alt="" />
          <h3 className="text-center font-bold text-2xl">Certified Tire</h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
