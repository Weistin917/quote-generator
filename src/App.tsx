import "./styles.css";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CachedIcon from "@mui/icons-material/Cached";
import Button from "@mui/material/Button";

const quotes = [
  "A regressor actually does not regress. What actually regresses isn't him, but everything else excluding him.",
  "Tell me, you fool. If I continue to regress, will I ever get to meet you again?",
  "If this story can really save you... If you regained just a little of your memories and remember us just one more time... Then I'll keep writing the epilogue for you until the end of time, for eternity.",
  "To think, I was learning how to make dumplings from a dumpling while walking on the Dumpling Road.",
  "The fact that you can regress at any time means that death is meaningless... If there is no sense of death then the value of life also disappears.",
  "If you run one more time.... If you get a chance to run again, do you believe you can see it better next time?",
  "There are three ways to survive in a ruined world. Now, I have forgotten a few, but one thing is certain. The fact that you who are reading this now will survive.",
  "Have You Protected All That You Were Supposed to Protect?",
];

export default function App() {
  // The quote to display.
  const [quote, setQuote] = useState(getQuote());

  // Each 5 seconds a new quote is selected from the array
  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getQuote());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>ORV Quotes Generator</h1>
      <Card variant="outlined" className="QuoteCard">
        <h3 className="Quote">{quote}</h3>
        <Button
          className="newQuote"
          variant="contained"
          onClick={() => {
            setQuote(getQuote());
          }}
        >
          <CachedIcon> </CachedIcon>
          New Quote
        </Button>
      </Card>
    </div>
  );
}

// random quote getter
function getQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}
