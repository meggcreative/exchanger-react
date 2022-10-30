import { StyledParagraph } from "./styled.js";

const Result = ({ result }) => {
  if (result === "") {
    return null;
  }
  return (
    <StyledParagraph>
      <span>
        Za {result.originalAmount} PLN otrzymasz {result.finalResult.toFixed(2)}{" "}
        {result.currency}
      </span>
    </StyledParagraph>
  );
};

export default Result;
