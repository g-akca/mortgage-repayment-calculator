import calculatorIcon from "/assets/images/icon-calculator.svg";

function MortgageForm() {
  return (
    <form className="bg-white flex flex-col gap-6 py-8 px-6">
      <div>
        <h1 className="mb-2 text-2xl leading-[125%] font-bold text-slate-900">Mortgage Calculator</h1>
        <button className="underline">Clear All</button>
      </div>

      <div className="flex flex-col gap-6">

        <div className="flex flex-col gap-3">
          <label htmlFor="amount">Mortgage Amount</label>

          <div className="flex items-center h-12 rounded-sm border border-slate-500 overflow-hidden">
            <span className="bg-slate-100 py-3 px-4 leading-[125%] text-lg font-bold">£</span>
            <input type="number" id="amount" name="amount" className="h-full w-full px-4" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="term">Mortgage Term</label>

          <div className="flex items-center h-12 rounded-sm border border-slate-500 overflow-hidden">
            <input type="number" id="term" name="term" className="h-full w-full px-4" />
            <span className="bg-slate-100 py-3 px-4 leading-[125%] text-lg font-bold">years</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="interest-rate">Interest Rate</label>

          <div className="flex items-center h-12 rounded-sm border border-slate-500 overflow-hidden">
            <input type="number" id="interest-rate" name="interest-rate" className="h-full w-full px-4" />
            <span className="bg-slate-100 py-3 px-4 leading-[125%] text-lg font-bold">%</span>
          </div>
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3">Mortgage Type</legend>

          <label htmlFor="repayment" className="flex items-center gap-4 h-12 px-4 rounded-sm border border-slate-500">
            <input
              type="radio"
              id="repayment"
              name="type"
              className="
                appearance-none relative
                w-5 h-5
                border-2 border-slate-700 rounded-full
                checked:border-lime
                checked:before:content-[''] checked:before:absolute
                checked:before:w-2.75 checked:before:h-2.75
                checked:before:bg-lime checked:before:rounded-full
                checked:before:inset-0 checked:before:m-auto
              "
            />
            <span className="text-slate-900 leading-[125%] text-lg font-bold">Repayment</span>
          </label>

          <label htmlFor="interest" className="flex items-center gap-4 h-12 px-4 rounded-sm border border-slate-500">
            <input
              type="radio"
              id="interest"
              name="type"
              className="
                appearance-none relative
                w-5 h-5
                border-2 border-slate-700 rounded-full
                checked:border-lime
                checked:before:content-[''] checked:before:absolute
                checked:before:w-2.75 checked:before:h-2.75
                checked:before:bg-lime checked:before:rounded-full
                checked:before:inset-0 checked:before:m-auto
              "
            />
            <span className="text-slate-900 leading-[125%] text-lg font-bold">Interest Only</span>
          </label>
        </fieldset>

      </div>

      <button type="submit" className="flex justify-center items-center gap-4 h-14 bg-lime rounded-full">
        <img src={calculatorIcon} alt="Calculator icon" />
        <span className="text-lg font-bold text-slate-900 leading-[125%]">Calculate Repayments</span>
      </button>
    </form>
  )
}

export default MortgageForm;
