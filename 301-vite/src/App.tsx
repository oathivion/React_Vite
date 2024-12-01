import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Main Page Component
const MainPage: React.FC = () => {
  const [currentQuote, setCurrentQuote] = React.useState<string>('');

  const Quotes: string[] = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "Be yourself; everyone else is already taken.― Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.― Albert Einstein",
    "You only live once, but if you do it right, once is enough.― Mae West",
    "If you tell the truth, you don't have to remember anything.― Mark Twain",
    "To live is the rarest thing in the world. Most people exist, that is all.― Oscar Wilde"
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setCurrentQuote(Quotes[randomIndex]);
  };

  return (
    <div className="app-container">
      <button className="generate-quote-button" onClick={generateQuote}>
        Generate Quote
      </button>
      {currentQuote && <p className="quote">{currentQuote}</p>}
      
      {/* Link to navigate to Spelling Page */}
      <Link to="/spelling" className="go-to-spelling-button">Go to Spelling Page</Link>
    </div>
  );
};

// Spelling Page Component
const SpellingPage: React.FC = () => {
  const text: string = "I like banana pudding";
  let index: number = 0;

  const handleClick = () => {
    if (index < text.length) {
      const letter = text[index];
      const span = document.createElement('span');
      span.textContent = letter;
      span.classList.add('letter');
      span.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Random color
      document.getElementById('spelling-container')?.appendChild(span);
      index++;
    }
  };

  return (
    <div className="spelling-page-container" onClick={handleClick}>
      <h1>Click to Spell:</h1>
      <div id="spelling-container" className="spelling-container"></div>
    </div>
  );
};

// App Component with Routing
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/spelling" element={<SpellingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
