import { FC } from "react";
import { Box } from "@mui/material";
import { TasksPage } from "./components/tasks/TasksPage";
import { LeftDrawer } from "./components/LeftDrawer";
import { UsersPage } from "./components/users/UsersPage";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { ErrorPage } from "./components/errorHandling/ErrorPage";
import { MainStyledBox } from "./App.styled";
import { ErrorBoundary } from "./components/errorHandling/ErrorBoundary";

const App: FC = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <LeftDrawer />
        <MainStyledBox>
          <Routes>
            <Route
              index
              element={
                <ErrorBoundary>
                  <TasksPage />
                </ErrorBoundary>
              }
            />

            <Route
              path="/users"
              element={
                <ErrorBoundary>
                  <UsersPage />
                </ErrorBoundary>
              }
            />
            <Route path="*" element={<Navigate to={"/"} replace />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </MainStyledBox>
      </Box>
    </Router>
  );
};

export default App;
