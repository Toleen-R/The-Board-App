import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 

const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: []
  });

  const [showTaskForm, setShowTaskForm] = useState(false);

  const addTask = (task, listId) => {
    const newList = { ...tasks, [listId]: [...tasks[listId], { ...task, id: uuidv4() }] };
    setTasks(newList);
    setShowTaskForm(false);
  };

  const deleteTask = (taskId, listId) => {
    const newList = { ...tasks, [listId]: tasks[listId].filter(task => task.id !== taskId) };
    setTasks(newList);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        showTaskForm,
        setShowTaskForm
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
