import React, { useState } from "react";
import { FormControl, Container, TextField, Button } from '@mui/material';

/**
 * TaskForm Component renders a form for adding new tasks.
 *
 * @param {Object} props - The component's properties.
 * @param {Function} props.addTask - Function to add a new task to the task list.
 * @returns {JSX.Element} - The rendered TaskForm component.
 */
const TaskForm = ({ addTask }) => {
    // State to manage the input text in the form
    const [text, setText] = useState("");

    /**
     * Handles the form submission.
     *
     * @param {Object} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the addTask function with the current text value
        addTask(text);
        // Reset the input text after submitting the form
        setText("");
    };

    // Render the TaskForm component
    return (
        <Container>
            {/* Form for adding new tasks */}
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    {/* Input field for task text */}
                    <TextField
                        label="Mention Task"
                        required={true}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></TextField>
                    {/* Button for submitting the form */}
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: 9 }}>
                        Add Task
                    </Button>
                </FormControl>
            </form>
        </Container>
    );
};

export default TaskForm;
