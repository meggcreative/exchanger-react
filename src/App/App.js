import Header from "../Header";
import Form from "../Form";
import Footer from "../Footer";
import Clock from "../Clock";
import { StyledContainer } from "./styled.js";
import { useState, useEffect } from "react";
const FAILURE_TEXT =
  "Upssss... Coś poszło nie tak... Sprawdź połączenie internetowe i spróbuj ponownie!";
const LOADING_TEXT =
  "Ładowanie... Pobieramy aktualne kursy z Banku Centralnego ...";

function App() {
  const [rates, setRates] = useState({});
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchApi = () => {
    fetch("https://api.exchangerate.host/latest?base=PLN")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((dataRates) => {
        setRates(dataRates.rates);
        setDate(dataRates.date);
        setLoading(false);
      })
      .catch(() => setError(true));
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
              <Form date={date} />
            </>
          ) : (
            <>
              {loading && <p color="blue">{LOADING_TEXT}</p>}
              {error && <p color="red">{FAILURE_TEXT}</p>}
            </>
          )}
        </main>
        <Footer content="Copyright © 2022 - MeggCreative" />
      </StyledContainer>
    </>
  );
}

export default App;
