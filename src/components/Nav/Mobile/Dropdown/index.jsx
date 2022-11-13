import React from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import {
  Container,
  List,
  ListItem,
  ListItemLink,
  Wrapper,
} from "./Dropdown.styles";

const MobileDropdown = ({ openNav }) => {
  const { currentUser } = useAuth();

  if (!openNav) return null;
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>
            <ListItemLink to="/">Home</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="/Genre">Genre</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="/news">News</ListItemLink>
          </ListItem>
          {!currentUser?.email ? (
            <>
              <ListItem>
                <ListItemLink to="/user/signIn">Sign In</ListItemLink>
              </ListItem>
              <ListItem>
                <ListItemLink to="/user/signUp">Sign Up</ListItemLink>
              </ListItem>
            </>
          ) : null}
        </List>
      </Wrapper>
    </Container>
  );
};

export default MobileDropdown;
