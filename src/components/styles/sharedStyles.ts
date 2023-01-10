import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

export const WrappingBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 20px;
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 411px;
  height: 494px;
  padding: 40px;
  background-color: white;
`;

export const StyledFormControl = styled(FormControl)`
  width: 250px;
  height: 80px;
`;

export const StyledTextField = styled(TextField)`
  width: 250px;
  height: 80px;
`;

export const ModalHeader = styled(Typography)`
  font-weight: 700;
  padding-bottom: 16px;
  font-size: 20px;
  line-height: 23px;
  border-bottom: 0.8px solid lightgrey;
`;

export const MainPageBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

export const DatagridWrapper = styled(Box)`
  width: 100%;
  background: white;
  display: flex;
`;

export const SelectErrorMessage = styled(FormHelperText)`
  color: #d32f2f;
  margin-left: 0;
`;
