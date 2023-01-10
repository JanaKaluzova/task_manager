import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ErrorText,
  Nadpis,
  OutsideContainer,
  StyledBox,
  StyledButton,
  Wrapper,
} from "./ErrorPage.styled";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <OutsideContainer>
      <StyledBox>
        <Wrapper>
          <Nadpis variant="h1">Oops!</Nadpis>
        </Wrapper>
        <ErrorText>Something went wrong.</ErrorText>
        <StyledButton variant="outlined" onClick={() => navigate("/")}>
          Go to homepage
        </StyledButton>
      </StyledBox>
    </OutsideContainer>
  );
};
