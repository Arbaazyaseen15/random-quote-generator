import "./styles.css";
import { useState, useEffect } from "react";

const getRandomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);
  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <h3>
        <span>``</span>
        <p>{quote?.text}</p>
        <i>
          <strong>{quote?.author}</strong>
        </i>
      </h3>
      <button onClick={getNewQuote}>Generate Quote</button>
    </div>
  );
}
