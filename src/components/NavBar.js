import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import { style } from '@mui/system'
const Container = styled.div`
  // padding:0;
  height: 80px;
  
  // background-color: #000;
  // border: 2.5px solid lightgray;
`;
const Wraper = styled.div`
  // border: 2.5px solid blue;
  padding: 0px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export const NavBar = () => {
  return (
    <Container>
      <Wraper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MyRetailo</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register">Register</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">Sign In</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/product">Products</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/order">Orders</Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wraper>
    </Container>
  );
};
