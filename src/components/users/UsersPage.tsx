import { Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  saveUser,
  deleteUser as deleteUserApi,
  getUsers,
} from "../../api/users";
import { User } from "../../utils/types";
import { MainPageBox, ModalBox, ModalHeader } from "../styles/sharedStyles";
import { CreateUserForm } from "./CreateUserForm";
import { UsersDataTable } from "./UsersDataTable";

export const UsersPage: React.FC = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const handleClose = () => setOpenCreate(false);

  const handleCreateUser = async (user: User) => {
    await saveUser(user);
    setOpenCreate(false);
    await refreshGridData(setUsers, navigate);
  };

  const handleDeleteUser = async (userId: string) => {
    await deleteUserApi(userId);
    await refreshGridData(setUsers, navigate);
  };

  const handleEditUser = async (user: User): Promise<boolean> => {
    try {
      await saveUser(user);
      return true;
    } catch (err) {
      return false;
    } finally {
      await refreshGridData(setUsers, navigate);
    }
  };

  useEffect(() => {
    refreshGridData(setUsers, navigate);
  }, []);

  return (
    <>
      <MainPageBox>
        <Modal open={openCreate} onClose={handleClose}>
          <ModalBox>
            <ModalHeader>Create User</ModalHeader>

            <CreateUserForm
              onCreateUser={handleCreateUser}
              onCancel={handleClose}
            />
          </ModalBox>
        </Modal>
        <Typography sx={{ fontWeight: 700 }}>User management</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setOpenCreate(true);
          }}
        >
          Create New User
        </Button>
      </MainPageBox>
      <UsersDataTable
        users={users}
        onDelete={handleDeleteUser}
        onEdit={handleEditUser}
      />
    </>
  );
};

async function refreshGridData(
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  navigate: NavigateFunction
) {
  try {
    const data = await getUsers();
    setUsers(data);
  } catch (err) {
    navigate("/error");
  }
}
