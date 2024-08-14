import { AiOutlineDash } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

function AppName() {
  return (
    <div>
      <>
        <div className="flex justify-center items-center text-white ">
          <AiOutlineDash size={50} />
          <h1 className="text-3xl italic font-semibold uppercase">To-Do Now</h1>
          <AiOutlineDash size={50} />
        </div>
        <div className="flex justify-center items-center text-white">
          <BsDashLg size={50} />
          <BsDashLg size={50} />
          <BsDashLg size={50} />
          <span>
            <IoCreateOutline size={45} />
          </span>
          <BsDashLg size={50} />
          <BsDashLg size={50} />
          <BsDashLg size={50} />
        </div>
      </>
    </div>
  );
}

export default AppName;
