import { useState } from "react";
import MortgageForm from "./components/MortgageForm.jsx";
import ResultsSection from "./components/ResultsSection.jsx";

function App() {
  const [results, setResults] = useState(null);

  return (
    <div 
      className="
        min-h-screen bg-slate-100 text-base font-medium leading-base text-slate-700 
        tablet:p-10 tablet:flex tablet:items-center tablet:justify-center
      "
    >
      <main 
        className="
          min-h-screen bg-white overflow-hidden flex flex-col 
          tablet:rounded-3xl tablet:min-h-0
          desktop:grid desktop:grid-cols-2 desktop:max-w-252
        "
      >
        <MortgageForm setResults={setResults} />
        <ResultsSection results={results} />
      </main>
    </div>
  )
}

export default App;
