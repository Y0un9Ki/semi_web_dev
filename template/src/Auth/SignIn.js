import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";

const SignIn = () => {
  return (
    <SignInPage>
      <Container>
        <FormField>
          <TextField
            id="standard-basic"
            label="ID"
            variant="standard"
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="PassWord"
            variant="standard"
            fullWidth
          />
          <Button variant="contained">Contained</Button>
        </FormField>
      </Container>
    </SignInPage>
  );
};

export default SignIn;

const SignInPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  width: 400px;
  height: 600px;
  background-color: #ddd;
`;

const FormField = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
`;
