import { Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Task } from "../../utils/types";
import { MainPageBox, ModalBox, ModalHeader } from "../styles/sharedStyles";
import { CreateTaskForm } from "./CreateTaskForm";
import { TasksDataTable } from "./TasksDataTable";
import {
  getTasks,
  saveTask,
  deleteTask as deleteTaskApi,
} from "../../api/tasks";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const TasksPage: React.FC = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  const handleClose = () => setOpenCreate(false);

  const handleCreateTask = async (task: Task) => {
    try {
      await saveTask(task);
      setOpenCreate(false);
      await refreshGridData(setTasks, navigate);
    } catch (err) {
      navigate("/error");
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await deleteTaskApi(taskId);
      await refreshGridData(setTasks, navigate);
    } catch (err) {
      navigate("/error");
    }
  };

  const handleEditTask = async (task: Task): Promise<boolean> => {
    try {
      await saveTask(task);
      return true;
    } catch (err) {
      navigate("/error");

      return false;
    } finally {
      await refreshGridData(setTasks, navigate);
    }
  };

  useEffect(() => {
    refreshGridData(setTasks, navigate);
  }, []);

  // runtime error simulation
  // let pokus: any;
  // pokus.sifon = 5;

  return (
    <>
      <MainPageBox>
        <Modal open={openCreate} onClose={handleClose}>
          <ModalBox>
            <ModalHeader>Create task</ModalHeader>
            <CreateTaskForm
              onCreateTask={handleCreateTask}
              onCancel={handleClose}
            />
          </ModalBox>
        </Modal>
        <Typography
          sx={{
            fontWeight: 700,
          }}
        >
          Task management
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setOpenCreate(true);
          }}
        >
          Create New Task
        </Button>
      </MainPageBox>

      <TasksDataTable
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </>
  );
};

async function refreshGridData(
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  navigate: NavigateFunction
) {
  try {
    const data = await getTasks();
    setTasks(data);
  } catch (err) {
    navigate("/error");
  }
}
