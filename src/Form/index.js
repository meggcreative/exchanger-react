import { useState, useRef } from "react";
import Result from "../Result";
import {
  StyledForm,
  StyledFieldset,
  StyledLabel,
  StyledLegend,
  StyledInput,
  StyledButton,
  StyledParagraph,
} from "./styled.js";

const Form = ({ date, rates }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const calculateResult = (amount, currency) => {
    const targetRate = rates[currency];

    setResult({
      originalAmount: +amount,
      finalResult: amount * targetRate,
      currency: currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
    setAmount("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledFieldset>
        <StyledLegend>Kwota w PLN jaką chcesz przeliczyć</StyledLegend>
        <p>
          <StyledLabel>
            Podaj kwotę *:
            <StyledInput
              ref={inputRef}
              name="amount"
              type="number"
              min="0.01"
              step="0.01"
              required
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </StyledLabel>
        </p>
      </StyledFieldset>
      <StyledFieldset>
        <StyledLegend>Waluta przeliczenia</StyledLegend>
        <p>
          <StyledLabel>
            Wybierz walutę:
            <StyledInput
              as="select"
              name="currency"
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              {Object.keys(rates).map((rateKey) => {
                return (
                  <option key={rateKey} value={rateKey}>
                    {rateKey}:{rates[rateKey]}
                  </option>
                );
              })}
            </StyledInput>
          </StyledLabel>
        </p>
      </StyledFieldset>
      <StyledButton onClick={focusInput}>Przelicz</StyledButton>
      <StyledParagraph>
        Kurs pobrano z Narodowego Banku Polskiego z dnia: {date}
      </StyledParagraph>
      <Result result={result} />
    </StyledForm>
  );
};

export default Form;
