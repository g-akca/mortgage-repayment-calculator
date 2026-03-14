import emptyImg from "/assets/images/illustration-empty.svg";

function ResultsSection({ results }) {
  return (
    results ? (
      <section 
        className="
            grow py-8 px-6 bg-slate-900 
            gap-6 flex flex-col 
            tablet:p-10 tablet:gap-10 desktop:rounded-bl-[80px]
          "
        >
        <div>
          <h2 className="mb-4 text-white text-2xl font-bold leading-[125%]">Your results</h2>
          <p className="text-slate-300">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
        </div>
        
        <div className="py-6 px-4 bg-black/25 border-t-4 border-lime rounded-lg tablet:p-8">
          <div className="pb-4 border-b border-slate-300/25 flex flex-col gap-2 tablet:pb-8">
            <p className="text-slate-300">Your monthly repayments</p>
            <p className="text-[40px] font-bold text-lime leading-10 tablet:text-[56px] tablet:leading-16">£{results.monthly.toFixed(2)}</p>
          </div>

          <div className="pt-4 flex flex-col gap-2 tablet:pt-8">
            <p className="text-slate-300">Total you'll repay over the term</p>
            <p className="text-2xl font-bold text-white leading-[125%]">£{results.total.toFixed(2)}</p>
          </div>
        </div>
      </section>
    )
    : (
      <section 
        className="
            grow py-8 px-6 bg-slate-900 
            gap-4 flex flex-col items-center text-center 
            tablet:p-10 desktop:rounded-bl-[80px] desktop:justify-center
          "
        >
        <img src={emptyImg} className="w-48 h-48" />
        <h2 className="text-2xl leading-[125%] font-bold text-white">Results shown here</h2>
        <p className="text-slate-300">Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
      </section>
    )
  )
}
export default ResultsSection;
