"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDo = () => {
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activity === "" && description === "") return;

    setToDoList([...toDoList, { activity, description }]);
    setActivity("");
    setDescription("");
  };

  const handleDeleteList = (index) => {
    const newTask = [...toDoList];
    newTask.splice(index, 1);
    setToDoList(newTask);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">TODO LIST</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <div>
          <label className="block text-lg mb-2 text-black">Aktivitas</label>
          <input
            value={activity}
            className="w-full border-2 border-gray-300 p-2 rounded text-black"
            onChange={(e) => setActivity(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg mb-2 text-black">Deskripsi</label>
          <input
            value={description}
            className="w-full border-2 border-gray-300 p-2 rounded text-black"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          color="primary"
          size="large"
          variant="contained"
        >
          Save
        </Button>
      </form>

      <div className="w-full max-w-md mt-8">
        {toDoList.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 p-4 mb-4 flex justify-between items-center rounded"
          >
            <div>
              <p className="text-xl font-semibold text-black">{item.activity}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => handleDeleteList(index)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
