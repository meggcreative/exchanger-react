import { StyledContainer } from "./styled.js";
import { useCurrentDate } from "../useCurrentDate";

const Clock = () => {
  const date = useCurrentDate();

  const dateContent = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const timeContent = date.toLocaleTimeString();

  return (
    <StyledContainer>
      Dzisiaj jest {dateContent}, {timeContent}
    </StyledContainer>
  );
};

export default Clock;
