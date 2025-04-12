import { useState } from "react";
import { Input, Collapse, Empty } from "antd";
import map from "../../../assets/images/map.png";
import { BsSearch } from "react-icons/bs";
import CustomModal from "../../../components/Reusable/Modal/CustomModal";
import { IoIosArrowForward } from "react-icons/io";

const data = [
  {
    id: 1,
    name: "Dhaka",
    value: "Dhaka",
    zoneCount: 10,
    areaCount: 10,
    zone: [
      {
        id: 1,
        name: "Zone 1",
        value: "Zone 1",
        area: [
          { id: 1, name: "Area A", value: "Area A" },
          { id: 2, name: "Area B", value: "Area B" },
        ],
      },
      {
        id: 2,
        name: "Zone 2",
        value: "Zone 2",
        area: [
          { id: 3, name: "Area C", value: "Area C" },
          { id: 4, name: "Area D", value: "Area D" },
        ],
      },
    ],
  },
  { id: 2, name: "Rajshahi", value: "Rajshahi" },
  { id: 3, name: "Rangpur", value: "Rangpur" },
  { id: 4, name: "Sylhet", value: "Sylhet" },
  { id: 5, name: "Chittagong", value: "Chittagong" },
  { id: 6, name: "Barisal", value: "Barisal" },
  { id: 7, name: "Khulna", value: "Khulna" },
  { id: 8, name: "Mymensingh", value: "Mymensingh" },
];

const CoverageArea = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleDistrictClick = (district) => {
    setSelectedDistrict((prev) => (prev?.id === district.id ? null : district));
    setOpenModal(true);
  };

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-5">
      <div className="bg-white p-5 rounded-lg lg:w-4/6">
        <div className="mb-4 border-b pb-4">
          <h2 className="text-2xl font-medium mb-4">Our Coverage Areas</h2>
          <p className="text-base text-textColor">
            We are currently available in 64 districts. We are constantly
            expanding to more places every day!
          </p>
        </div>

        <div className="flex items-center justify-between gap-5">
          <h3 className="text-xl lg:text-2xl font-medium w-full">
            Districts with Our Presence
          </h3>
          <Input
            placeholder="Search District"
            suffix={<BsSearch />}
            className="lg:w-3/6"
            size="large"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleDistrictClick(item)}
              className={`mb-4 border ${
                selectedDistrict?.id === item.id
                  ? "border-primary"
                  : "border-gray-400"
              } hover:border-primary duration-300 cursor-pointer p-5 rounded-lg`}
            >
              <h3 className="text-xl font-medium mb-2">{item.name}</h3>
              <div className="flex flex-wrap gap-2 lg:gap-10 mt-4 text-base">
                <div>{item?.zoneCount || 0} Zone(s)</div>
                <div>{item?.areaCount || 0} Areas</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <img src={map} alt="map" />
      </div>

      <CustomModal
        open={openModal}
        setOpen={setOpenModal}
        title={
          <div className="text-2xl font-medium">
            {selectedDistrict?.name} Zone
          </div>
        }
        width={600}
      >
        <Input
          placeholder="Search Zone or Area"
          suffix={<BsSearch />}
          className="mb-5"
          size="large"
        />
        {selectedDistrict?.zone ? (
          <Collapse
            bordered={false}
            expandIconPosition="end"
            expandIcon={({ isActive }) => (
              <IoIosArrowForward
                className={`transition-transform duration-300 -ml-2 mt-1 ${
                  isActive ? "rotate-90" : ""
                }`}
              />
            )}
            className="bg-[#F5F8FA] p-0 mb-5 rounded-lg"
            items={selectedDistrict.zone.map((zone) => ({
              key: zone.id,
              label: (
                <div className="flex justify-between items-center text-base font-medium ">
                  <span>{zone.name}</span>
                  <span>{zone.area?.length || 0} Areas</span>
                </div>
              ),
              children: (
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  {zone.area?.map((area) => (
                    <li key={area.id}>{area.name}</li>
                  ))}
                </ul>
              ),
            }))}
          />
        ) : (
          <Empty description="No Zone Available" />
        )}
      </CustomModal>
    </section>
  );
};

export default CoverageArea;
