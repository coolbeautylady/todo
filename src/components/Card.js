import React, { useState } from 'react';
import { Card, CardContent, CardHeader, IconButton, Checkbox, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTask from '../modals/EditTask';

const TaskCard = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <Card sx={{ maxWidth: 345, mb: 2, textDecoration: isChecked ? 'line-through' : 'none' }}>
            <CardHeader
                sx={{ backgroundColor: colors[index % 5].primaryColor }}
                action={
                    <Checkbox
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        sx={{ color: "gray" }}
                    />
                }
                title={taskObj.Name}
                titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent sx={{ backgroundColor: colors[index % 5].secondaryColor }}>
                <Typography variant="body2" component="p">
                    {taskObj.Description}
                </Typography>
                <IconButton aria-label="edit" onClick={toggle} sx={{ color: colors[index % 5].primaryColor }}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={handleDelete} sx={{ color: colors[index % 5].primaryColor }}>
                    <DeleteIcon />
                </IconButton>
            </CardContent>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </Card>
    );
};

export default TaskCard;
