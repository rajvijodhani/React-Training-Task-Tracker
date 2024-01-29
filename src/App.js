import { useState } from 'react';
import TaskForm from  './components/TaskForm';
import TaskList from './components/TaskList';
import { v4 as uuid } from 'uuid';

/**
 * Simple task tracker app.
 * (For training purposes) 
 */
function App() {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 3, text: 'Task 3', completed: false },
  ]);


  /**
   * Deletes a task with the specified id.
   *
   * @param {number} id - The unique identifier of the task to be deleted.
   */
  const deleteTask = (id) => {
    // Filter out the task with the specified id and update the state
    setTasks(tasks.filter(task => task.id !== id));
  };

  /**
   * Checks or unchecks a task based on the specified id.
   *
   * @param {number} id - The unique identifier of the task to be checked or unchecked.
   */
  const checkTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          // Toggle the completed property
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  /**
   * Adds a new task with the specified text to the list of tasks.
   *
   * @param {string} text - The text of the new task.
   */
  const addTask = (text) => {
    const newTask = {
      id: uuid(),
      text: text,
      completed: false
    };
    // Update the state with the new task added to the tasks array
    setTasks([...tasks, newTask]);
  };

  // Render the components of the app
  return (
    <div>
      {/* TaskForm component for adding new tasks */}
      <TaskForm addTask={addTask} />
      
      {/* TaskList component for displaying the list of tasks */}
      <TaskList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
