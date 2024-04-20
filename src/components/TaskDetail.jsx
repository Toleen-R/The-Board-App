import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TaskContext from "../context/TaskContext";

const TaskDetailContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 40px;
    width: 60%;
    height: 60%;
    text-align: left;
    overflow: auto;
    z-index: 9999;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    cursor: pointer;
`;

const DeleteButton = styled.button`
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
`;

const SaveButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#4caf50')};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const EditableInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
`;

const EditableTextarea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
`;

function TaskDetail({ task: initialTask, onClose, onDelete, onUpdate }) {
    const [editedTask, setEditedTask] = useState(initialTask);
    const [isModified, setIsModified] = useState(false);

    useEffect(() => {
        setEditedTask(initialTask); // Load initial task from props
        setIsModified(false); // Reset isModified when task changes
    }, [initialTask]);

    const handleTaskUpdate = () => {
        localStorage.setItem('editedTask', JSON.stringify(editedTask)); // Save updated task to local storage
        onUpdate(editedTask);
        onClose();
    };

    const handleInputChange = (e) => {
        setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
        setIsModified(true); // Set isModified to true when input changes
    };

    return (
        <TaskDetailContainer>
            <CloseButton onClick={onClose}>
                <FontAwesomeIcon icon={faX} />
            </CloseButton>
            <EditableInput
                type="text"
                name="title"
                value={editedTask.title}
                onChange={handleInputChange}
            />
            <EditableTextarea
                name="description"
                value={editedTask.description}
                onChange={handleInputChange}
            />
            <DeleteButton onClick={onDelete}>Delete Task</DeleteButton>
            <SaveButton disabled={!isModified} onClick={handleTaskUpdate}>
                Save Task
            </SaveButton>
        </TaskDetailContainer>
    );
}

export default TaskDetail;
