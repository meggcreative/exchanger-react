import Header from "../Header";
import Form from "../Form";
import Footer from "../Footer";
import Clock from "../Clock";
import { StyledContainer, StyledParagraph } from "./styled.js";
import { useCurrentRatesData } from "../useCurrentRatesData";

const FAILURE_TEXT =
  "Upssss... Coś poszło nie tak... Sprawdź połączenie internetowe i spróbuj ponownie!";
const LOADING_TEXT =
  "Ładowanie... Pobieramy aktualne kursy z Narodowego Banku Polskiego ...";

function App() {
  const { rates, date, loading, error, isReady } = useCurrentRatesData();

  return (
    <>
      <StyledContainer>
        <Header content="Kalkulator Walut" />
        <main>
          {isReady ? (
            <>
              <Clock />
              <Form date={date} rates={rates} />
            </>
          ) : (
            <>
              {loading && <StyledParagraph>{LOADING_TEXT}</StyledParagraph>}
              {error && <StyledParagraph>{FAILURE_TEXT}</StyledParagraph>}
            </>
          )}
        </main>
        <Footer content="Copyright © 2022 - MeggCreative" />
      </StyledContainer>
    </>
  );
}

export default App;
