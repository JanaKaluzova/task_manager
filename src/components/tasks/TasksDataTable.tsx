import { Box, Button, Divider, Modal } from "@mui/material";
import React, { useRef, useState } from "react";
import { DataGrid, GridColumns, GridRowParams } from "@mui/x-data-grid";
import { Container } from "@mui/system";
import { EditTasksForm } from "./EditTasksForm";
import { Task } from "../../utils/types";
import { DatagridWrapper, ModalBox, ModalHeader } from "../styles/sharedStyles";

type Props = {
  tasks: Task[];

  onDelete: (id: string) => void;
  onEdit: (task: Task) => Promise<boolean>;
};

export const TasksDataTable: React.FC<Props> = ({
  tasks,
  onEdit,
  onDelete,
}) => {
  const columns: GridColumns = [
    { field: "id", hide: true },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "priority", headerName: "Priority", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      flex: 1,

      getActions: (params: GridRowParams) => [
        <>
          <Button
            variant="outlined"
            onClick={() => {
              selectedID.current = params.id?.toString();
              handleOpen();
            }}
          >
            EDIT
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              onDelete(params.id?.toString());
            }}
          >
            DELETE
          </Button>
        </>,
      ],
    },
  ];

  const [openEdit, setOpenEdit] = useState(false);

  const selectedID = useRef<string | undefined>(undefined);

  const handleOpen = () => setOpenEdit(true);
  const handleClose = () => setOpenEdit(false);

  const initialData: Task = tasks.find((x) => x.id === selectedID.current) ?? {
    id: new Date().getTime().toString(),
    title: "",
    type: "",
    priority: "",
    description: "",
  };

  const onEditInternal = async (task: Task): Promise<void> => {
    const result = await onEdit(task);

    if (result) {
      handleClose();
    }
  };

  return (
    <Container sx={{ display: "flex" }}>
      <Modal open={openEdit} onClose={handleClose}>
        <ModalBox>
          <ModalHeader>Edit task</ModalHeader>
          <Divider />
          <EditTasksForm
            onEditTask={onEditInternal}
            initialValue={initialData}
            onCancel={handleClose}
          />
        </ModalBox>
      </Modal>
      <DatagridWrapper>
        <DataGrid
          autoHeight
          columns={columns}
          rows={tasks}
          rowsPerPageOptions={[10, 50, 100]}
          pageSize={10}
        />
      </DatagridWrapper>
    </Container>
  );
};
