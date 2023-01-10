import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { activeStyle, navStyle } from "../utils/constants";
import {
  Drawer,
  DrawerHeader,
  HamburgerMenu,
  StyledNavLink,
} from "./LeftDrawer.styled";

export const LeftDrawer: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <HamburgerMenu onClick={() => setOpen(!open)} />
        {open && <Typography fontWeight="700">Task manager</Typography>}
      </DrawerHeader>
      <Divider />
      <List disablePadding={true}>
        <StyledNavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          <ListItem disablePadding divider={true}>
            <ListItemButton>
              <ListItemIcon>
                <TaskOutlinedIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
      </List>

      <List disablePadding={true}>
        <StyledNavLink
          to="users"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          <ListItem divider={true} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        </StyledNavLink>
      </List>
      <Divider />
    </Drawer>
  );
};
