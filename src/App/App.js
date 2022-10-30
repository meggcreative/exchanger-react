import { useState, useEffect } from "react";
import Header from "../Header";
import Form from "../Form";
import Footer from "../Footer";
import Clock from "../Clock";
import { StyledContainer, StyledParagraph } from "./styled.js";

const FAILURE_TEXT =
  "Upssss... Coś poszło nie tak... Sprawdź połączenie internetowe i spróbuj ponownie!";
const LOADING_TEXT =
  "Ładowanie... Pobieramy aktualne kursy z Narodowego Banku Polskiego ...";

function App() {
  const [rates, setRates] = useState({});
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchApi = async () => {
    try {
      const myResponse = await fetch(
        "https://api.exchangerate.host/latest?base=PLN"
      );
      if (!myResponse.ok) {
        throw new Error(myResponse.statusText);
      }

      const dataRates = await myResponse.json();
      setRates(dataRates.rates);
      setDate(dataRates.date);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    setTimeout(fetchApi, 3000);
  }, []);

  const isFinished = !error && !loading;
  return (
    <>
      <StyledContainer>
        <Header content="Kalkulator Walut" />
        <main>
          {isFinished ? (
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
