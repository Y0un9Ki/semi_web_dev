import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function App() {
  const navigate = useNavigate();

  return (
    <Mainpage>
      <Container>
        <Header>
          <Logo></Logo>
          <Auth>
            <SignIn onClick={() => navigate("/signin")}>login</SignIn>
            <SignOut></SignOut>
          </Auth>
        </Header>
        <Tapbar></Tapbar>
      </Container>
    </Mainpage>
  );
}

export default App;

const Mainpage = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1024px;
  height: 100vh;
  background-color: #ddd;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 100px;
  background-color: #ccc;
`;

const Logo = styled.div`
  width: 64px;
  height: 64px;
  background-color: #123;
`;

const Auth = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 64px;
  background-color: #123;
`;

const SignIn = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
`;

const SignOut = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
`;

const Tapbar = styled.div`
  width: 100%;
  height: 80px;
  background-color: #eee;
`;
