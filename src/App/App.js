import Header from "../Header";
import Form from "../Form";
import Footer from "../Footer";
import Clock from "../Clock";
import { StyledContainer } from "./styled.js";
import { useState, useEffect } from "react";

function App() {
  const [rates, setRates] = useState({});
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchApi = () => {
    fetch("https://api.exchangerate.host/latest?base=PLN")
      .then((response) => {
        if (response.ok) {
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

  if (loading) {
    return (
      <>
        <StyledContainer>
          <Header content="Kalkulator Walut" />
          <main>
            <p>
              {" "}
              Ładowanie... Pobieramy aktualne kursy z Banku Centralnego ...
            </p>
          </main>
          <Footer content="Copyright © 2022 - MeggCreative" />
        </StyledContainer>
      </>
    );
  }

  if (error) {
    return (
      <>
        <StyledContainer>
          <Header content="Kalkulator Walut" />
          <main>
            <p>
              {" "}
              Upssss... Coś poszło nie tak... Sprawdź połączenie internetowe i
              spróbuj ponownie!
            </p>
          </main>
          <Footer content="Copyright © 2022 - MeggCreative" />
        </StyledContainer>
      </>
    );
  }

  return (
    <>
      <StyledContainer>
        <Header content="Kalkulator Walut" />
        <main>
          <Clock />
          <Form date={date} />
        </main>
        <Footer content="Copyright © 2022 - MeggCreative" />
      </StyledContainer>
    </>
  );
}

export default App;
