import AppName from "./components/appName";
import Addtask from "./components/addtask";
import ViewTask from "./components/viewTask";
import { useState } from "react";

function App() {
  const initialdata = [{ name: "Rahul Mahto", date: "19/05/2002" }];
  const [data, setData] = useState(initialdata);

  const handleButton = (name, date) => {
    const newtodo = [...data, { name: name, date: date }];
    setData(newtodo);
    console.log(setData);
  };

  const handleDeleteItem = (name) => {
    const newtodoitems = data.filter((item) => item.name != name);
    setData(newtodoitems);
  };

  return (
    <>
      <div className="bg-[#1E1E1E] h-screen py-5">
        <AppName />
        <Addtask handleButton={handleButton} />
        <ViewTask data={data} handleDeleteItem={handleDeleteItem} />
      </div>
    </>
  );
}

export default App;
