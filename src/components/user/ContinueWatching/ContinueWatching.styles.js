import styled from "styled-components";
import { PostContainer } from "../../Post/Post.styles";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  & ${PostContainer} {
    width: 18%;
  }
`;
