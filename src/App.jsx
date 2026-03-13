import MortgageForm from "./components/MortgageForm.jsx";
import ResultsSection from "./components/ResultsSection.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <main>
        <MortgageForm />
        <ResultsSection />
      </main>
    </div>
  )
}

export default App;
