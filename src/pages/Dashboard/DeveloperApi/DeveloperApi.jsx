import api1 from "../../../assets/images/api1.png";
import api2 from "../../../assets/images/api2.png";

const DeveloperApi = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10">
      <img src={api1} alt="api1" />
      <img src={api2} alt="api2" className="w-full" />
    </section>
  );
};

export default DeveloperApi;
