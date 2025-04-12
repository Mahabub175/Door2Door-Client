import { IoIosArrowForward } from "react-icons/io";
import { helpData } from "../../../assets/data/helpData";

const HelpCenter = () => {
  return (
    <section>
      {helpData?.map((item) => (
        <div key={item.id}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl lg:text-3xl font-medium">{item.title}</h2>
            <p className="text-base font-medium cursor-pointer text-primary">
              See All
              <IoIosArrowForward className="text-primary inline-block ml-2" />
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-8">
            {item.data.map((data) => (
              <div key={data.id} className="">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-full h-48 object-cover mb-4 rounded-lg cursor-pointer"
                />
                <h3 className="text-lg font-medium">{data.title}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default HelpCenter;
