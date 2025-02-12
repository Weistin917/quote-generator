import "./styles.css";
import React, { useState, useEffect } from "react";

const quotes = [
  "abc", "def", "ghi", "jkl", "mno", "pqr"
];

export default function App() {
  const [quote, setQuote] = useState(getQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getQuote());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>ORV Quotes Generator</h1>
        <h3 className="Quote">{quote}</h3>
        <button className="newQuote" onClick={() => { setQuote(getQuote()); }} >
          New Quote
        </button>
    </div>
  );
}

function getQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

