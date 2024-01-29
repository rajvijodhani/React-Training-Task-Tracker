import React from "react";
import { Card, CardContent, Typography, Container, IconButton, Button } from "@mui/material";
import { green, lightgray, black } from "@mui/material/colors";
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';

/**
 * TaskStyle Component represents a styled task card.
 *
 * @param {Object} props - The component's properties.
 * @param {string} props.title - The title of the task.
 * @param {Function} props.checkTask - Function to mark the task as complete.
 * @param {number} props.id - The unique identifier for the task.
 * @param {boolean} props.completed - Flag indicating whether the task is completed.
 * @param {Function} props.deleteTask - Function to delete the task.
 * @returns {JSX.Element} - The rendered TaskStyle component.
 */
const TaskStyle = ({ title, checkTask, id, completed, deleteTask }) => {
    // Function to mark the task as complete
    const markComplete = () => checkTask(id);
    
    // Function to delete the task
    const delTask = () => deleteTask(id);

    // Determine the text decoration style based on task completion status
    const taskStyle = completed ? { textDecoration: "line-through" } : { textDecoration: "none" };

    // Determine the card style based on task completion status
    const cardStyle = completed ? { marginTop: 35, background: "lightgray" } : { marginTop: 35, background: "black" };

    // Determine the icon color based on task completion status
    const iconColor = completed ? green[500] : "lightblue"; 

    // Determine the text color based on task completion status
    const textColor = completed ? "black" : "white";

    // Render the TaskStyle component
    return (
        <div>
            <Container>
                <Card variant="outlined" style={cardStyle}>
                    <CardContent style={{ color: textColor }}>
                        {/* Check Icon */}
                        <Typography variant="h6" component="h2" style={taskStyle}>
                            <IconButton onClick={markComplete}>
                                <TaskRoundedIcon style={{ color: iconColor }} />
                            </IconButton>
                            {title}
                            {/* Delete Button */}
                            <IconButton style={{ float: 'right' }} onClick={delTask}>
                                <Button variant="contained" color="error">Delete</Button>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default TaskStyle;
