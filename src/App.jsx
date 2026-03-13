import { useState } from "react";
import MortgageForm from "./components/MortgageForm.jsx";
import ResultsSection from "./components/ResultsSection.jsx";

function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 text-base font-medium leading-base text-slate-700">
      <main>
        <MortgageForm setResults={setResults} />
        <ResultsSection results={results} />
      </main>
    </div>
  )
}

export default App;
