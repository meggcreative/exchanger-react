import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const StyledFieldset = styled.fieldset`
  padding: 20px;
  margin-bottom: 20px;
  background-color: rgba(170, 226, 208, 0.732);
  border-radius: 10px;
  box-shadow: 9px 10px 20px ${({ theme }) => theme.colors.silver};
`;

export const StyledLabel = styled.label`
  padding: 0 10px;
  font-size: 20px;
`;

export const StyledLegend = styled.legend`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.gallery};
  border-radius: 20px;
  background-color: aliceblue;
  font-size: 25px;
  color: rgb(43, 41, 41);
`;

export const StyledInput = styled.input`
  margin: 0 20px;
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  width: 600px;
  align-self: center;
  background-color: rgba(162, 178, 173, 0.909);
  border: 2px solid rgb(45, 44, 44);
  padding: 10px;
  border-radius: 10px;
  font-size: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 350px;
  }

  &:hover {
    background-color: rgba(113, 129, 124, 0.4);
  }

  &:active {
    background-color: rgba(113, 129, 124, 0.25);
  }
`;
export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.twilightBlue};
  font-size: 15px;
  align-self: center;
`;
