import { Box, Button, Container, Modal } from "@mui/material";
import { DataGrid, GridColumns, GridRowParams } from "@mui/x-data-grid";
import React, { useRef, useState } from "react";
import { User } from "../../utils/types";
import { DatagridWrapper, ModalBox, ModalHeader } from "../styles/sharedStyles";

import { EditUserForm } from "./EditUserForm";

type Props = {
  users: User[];

  onDelete: (id: string) => void;
  onEdit: (user: User) => Promise<boolean>;
};

export const UsersDataTable: React.FC<Props> = ({
  users,
  onDelete,
  onEdit,
}) => {
  const columns: GridColumns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phoneNumber", headerName: "Phone Number", flex: 1 },
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

  const initialData: User = users.find((x) => x.id === selectedID.current) ?? {
    id: new Date().getTime().toString(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  const onEditInternal = async (user: User): Promise<void> => {
    const result = await onEdit(user);

    if (result) {
      handleClose();
    }
  };

  return (
    <Container sx={{ display: "flex" }}>
      <Modal open={openEdit} onClose={handleClose}>
        <ModalBox>
          <ModalHeader>Edit user</ModalHeader>
          <EditUserForm
            onEditUser={onEditInternal}
            initialValue={initialData}
            onCancel={handleClose}
          />
        </ModalBox>
      </Modal>
      <DatagridWrapper>
        <DataGrid
          autoHeight
          columns={columns}
          rows={users}
          rowsPerPageOptions={[10, 50, 100]}
          pageSize={10}
        />
      </DatagridWrapper>
    </Container>
  );
};
