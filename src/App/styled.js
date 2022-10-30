import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  border: 2px solid black;
  border-radius: 20px;
  background-color: hsla(208, 11%, 24%, 0.95);
  padding: 20px;
`;
export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.twilightBlue};
  font-size: 20px;
  text-align: center;
`;
