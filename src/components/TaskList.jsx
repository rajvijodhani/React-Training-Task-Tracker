import React from "react";
import TaskStyle from "./TaskStyle";

/**
 * TaskList Component renders a list of tasks using the TaskStyle component.
 *
 * @param {Object} props - The component's properties.
 * @param {Array} props.tasks - An array of tasks to be displayed.
 * @param {Function} props.checkTask - Function to mark a task as complete.
 * @param {Function} props.deleteTask - Function to delete a task.
 * @returns {JSX.Element} - The rendered TaskList component.
 */
const TaskList = ({ tasks, checkTask, deleteTask }) => {
  // Sort tasks based on completion status (completed tasks to the bottom)
  const sortedTasks = [...tasks].sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));

  // Render the TaskList component
  return (
    <div>
      {/* Map through the sortedTasks array and render TaskStyle for each task */}
      {sortedTasks.map((task) => (
        <TaskStyle key={task.id} title={task.text} checkTask={checkTask} id={task.id} completed={task.completed} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
