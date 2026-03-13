import MortgageForm from "./components/MortgageForm.jsx";
import ResultsSection from "./components/ResultsSection.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-base font-medium leading-base text-slate-700">
      <main>
        <MortgageForm />
        <ResultsSection />
      </main>
    </div>
  )
}

export default App;
