import { useState } from "react";

function Addtask({ handleButton }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleButtonclicked = (event) => {
    event.preventDefault();
    handleButton(name, date);
    console.log("rahul");
    setName("");
    setDate("");
  };

  return (
    <>
      <div className="flex justify-center items-center  mt-6 mb-3">
        <form onSubmit={handleButtonclicked} className="bg-white rounded-2xl">
          <input
            name="name"
            type="text"
            placeholder="Add Task"
            value={name}
            className="px-5 rounded-2xl border-none focus:outline-none"
            onChange={handleName}
          />
          <input
            name="date"
            type="date"
            placeholder="Date"
            className="px-5 rounded-2xl border-none focus:outline-none"
            value={date}
            onChange={handleDate}
          />
          <button
            type="submit"
            className="bg-[#4F4F4F] text-white px-4 py-1 rounded-2xl font-semibold italic"
          >
            Add Task
          </button>
        </form>
      </div>
      <hr className="mx-60 mt-5" />
    </>
  );
}

export default Addtask;
