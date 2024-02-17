import React, { useState } from "react";

function TodoMain() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [mainTask, setMainTask] = useState([]);

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className="font-mono">No Task Available, Add task!!!</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className="flex justify-between mb-2 bg-white py-5 px-9 rounded-md font-mono">
            <h4 className="font-bold text-xl">{t.title}</h4>
            <h4 className="text-lg">{t.desc}</h4>
            <button
              onClick={deleteHandler}
              className="bg-red-400 px-3 py-1 font-bold text-white rounded"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { title, desc }]);

    setTitle("");
    setDesc("");
  };

  return (
    <>
      <form onSubmit={submitHandler} className="font-mono flex gap-20 p-5 justify-center">
        <input
          type="text"
          value={title}
          placeholder="Enter Title"
          name="title"
          className="px-2 py-2 text-lg rounded-xl"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={desc}
          placeholder="Enter Description"
          name="description"
          className="px-2 py-2 text-lg rounded-xl"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="px-3 py-1 bg-green-500 rounded-xl text-white font-bold">
          Add Task
        </button>
      </form>

      <div className="w-full flex justify-center">
        <div className="p-8 bg-slate-200 rounded-xl w-11/12">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
}

export default TodoMain;
