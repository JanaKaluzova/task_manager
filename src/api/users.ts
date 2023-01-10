import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { User } from "../utils/types";
import { firestore } from "./firebase";

const usersRef = collection(firestore, "users");

export const getUsers = async (): Promise<User[]> => {
  const docsSnap = await getDocs(usersRef);
  const users: User[] = [];
  docsSnap.forEach((doc) => {
    const newUser = { ...doc.data(), id: doc.id } as User;
    users.push(newUser);
  });

  return users;
};

export const saveUser = async ({ id, ...user }: User): Promise<void> => {
  return setDoc(doc(usersRef, id), user);
};

export const deleteUser = async (userId: string): Promise<void> => {
  return deleteDoc(doc(usersRef, userId));
};
