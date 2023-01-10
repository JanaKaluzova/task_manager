import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";

export const Nadpis = styled(Typography)`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 230px;
  margin: 0;
  font-weight: 900;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: url(https://colorlib.com/etc/404/colorlib-error-404-10/img/bg.jpg),
    no-repeat;
  background-size: cover;
  background-position: center;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ErrorText = styled(Typography)`
  color: #2e2862;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const OutsideContainer = styled(Container)`
  position: relative;
  height: 100vh;
`;

export const StyledButton = styled(Button)`
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: #3b2f87;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 4px 15px -5px #0046d5;
  -webkit-box-shadow: 0 4px 15px -5px #0046d5;

  :hover {
    background: #313c51;
  }
`;

export const StyledBox = styled(Box)`
  top: 50%;
  left: 50%;
  position: absolute;
  max-width: 410px;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled(Box)`
  height: 280px;
  position: relative;
  z-index: -1;
`;
