import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Issue an Access Token",
    method: "POST",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  },
  {
    id: 2,
    title: "Issue a Refresh Token",
    method: "POST",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
  },
];

const DeveloperApi = () => {
  const [selectedId, setSelectedId] = useState(data[0]?.id);

  const selectedItem = data.find((item) => item.id === selectedId);

  return (
    <section className="flex flex-col lg:flex-row gap-5 lg:gap-10">
      <div className="bg-white rounded-lg p-5 space-y-4 lg:w-3/6">
        <h1 className="text-base lg:text-xl xxl:text-2xl font-medium pb-2 border-b border-gray-200">
          API Documentation
        </h1>
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`flex items-center justify-between gap-2 cursor-pointer rounded-lg p-3 hover:bg-gray-100 duration-300 ${
              selectedId === item.id ? "bg-gray-100" : ""
            }`}
          >
            <h1 className="text-base text-textColor font-medium">
              {item.title}
            </h1>
            <div
              className={`px-2 py-1 rounded-lg text-white ${
                item.method === "DELETE" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {item.method}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg p-5 w-full">
        {selectedItem ? (
          <>
            <p dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
          </>
        ) : (
          <p>Select an API method to see details</p>
        )}
      </div>
    </section>
  );
};

export default DeveloperApi;
