import emptyImg from "/assets/images/illustration-empty.svg";

function ResultsSection() {
  return (
    <section className="py-8 px-6 bg-slate-900 gap-4 flex flex-col items-center text-center">
      <img src={emptyImg} className="w-48 h-48" />
      <h2 className="text-2xl leading-[125%] font-bold text-white">Results shown here</h2>
      <p className="text-slate-300">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
    </section>
  )
}
export default ResultsSection;
