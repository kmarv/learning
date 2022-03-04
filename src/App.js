import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import React, { useState } from "react";
import CardPie from "./components/CardPie";
import DataFetching from "./components/DataFetching";
import './App.css'
import CardSlider from "./components/CardSlider";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "meeting at school",
      day: "Feb 56h at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 7th at 2:30pm",
      reminder: false,
    },
  ]);
//  add task
const addTask =(task) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}
  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //  Toggle reminder
  const toggleRemainder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} :  task))
  };
  
  const[showAddTask, setShowAddTask] = useState(false)
  return (
    <div className="container">
      {/* <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
      ) : (
        "No Tasks To Show"
      )} */}
        <CardSlider />
      {/* <DataFetching /> */}
    </div>
  );
}

export default App;
