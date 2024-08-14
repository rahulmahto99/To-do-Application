import { MdDeleteOutline } from "react-icons/md";

function ViewTask({ data, handleDeleteItem }) {
  return (
    <>
      <div className="h-80  overflow-y-auto ">
        {data.map((item) => (
          <div
            key={item}
            className="text-white flex justify-center items-center mt-5  "
          >
            <div className="bg-[#222222] w-6/12 flex justify-between rounded-md items-center ">
              <div className="flex items-center pl-3 gap-40">
                <h1 className="task font-medium text-base">{item.name}</h1>
                <h1 className="date font-normal text-base">{item.date}</h1>
              </div>
              <div>
                <span
                  className="bg-[#999999] rounded flex px-2 py-2 cursor-pointer"
                  onClick={() => handleDeleteItem(item.name)}
                >
                  <MdDeleteOutline color="#222222" size={25} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewTask;
