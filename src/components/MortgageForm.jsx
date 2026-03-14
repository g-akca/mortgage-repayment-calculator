import { useForm } from "react-hook-form";
import calculatorIcon from "/assets/images/icon-calculator.svg";

function MortgageForm({ setResults }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const amount = Number(data.amount);
    const years = Number(data.term);
    const rate = Number(data.rate) / 100 / 12;
    const months = years * 12;

    let monthly = amount * rate;

    if (data.type === "repayment") {
      monthly *= Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
    }

    const total = monthly * months;

    setResults({ monthly, total });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white flex flex-col gap-6 py-8 px-6 tablet:p-10 tablet:gap-10">
      <div className="flex flex-col gap-2 tablet:flex-row tablet:justify-between tablet:items-center">
        <h1 className="text-2xl leading-[125%] font-bold text-slate-900">Mortgage Calculator</h1>
        <button
          type="button"
          onClick={() => reset()}
          className="underline cursor-pointer hover:text-slate-900 self-start transition-all"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col gap-6">

        <div className="flex flex-col gap-3">
          <label htmlFor="amount">Mortgage Amount</label>

          <div 
            className={`
              group flex items-center 
              h-12 overflow-hidden
              rounded-sm border
              text-lg font-bold leading-[125%] transition-all
              ${errors.amount ? "border-red" : "border-slate-500 hover:border-slate-900 focus-within:border-lime"}
            `}
          >
            <span 
              className={`
                py-3 px-4 transition-all
                ${errors.amount ? 
                  "bg-red text-white" 
                  : 
                  "bg-slate-100 group-focus-within:bg-lime group-focus-within:text-slate-900"
                }
              `}
            >
              £
            </span>
            <input
              type="number"
              id="amount"
              step="any"
              min="0"
              className="h-full w-full px-4 text-slate-900 outline-none"
              aria-invalid={errors.amount ? "true" : "false"}
              aria-describedby={errors.amount ? "amount-error" : undefined}
              {...register("amount", {
                required: "This field is required"
              })}
            />
          </div>

          {errors.amount && (
            <p id="amount-error" className="text-red text-sm">{errors.amount.message}</p>
          )}
        </div>
        
        <div className="tablet:grid tablet:grid-cols-2 tablet:gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="term">Mortgage Term</label>

            <div 
              className={`
                group flex items-center 
                h-12 overflow-hidden
                rounded-sm border
                text-lg font-bold leading-[125%] transition-all
                ${errors.term ? "border-red" : "border-slate-500 hover:border-slate-900 focus-within:border-lime"}
              `}
            >
              <input
                type="number"
                id="term"
                step="any"
                min="0"
                className="h-full w-full px-4 text-slate-900 outline-none"
                aria-invalid={errors.term ? "true" : "false"}
                aria-describedby={errors.term ? "term-error" : undefined}
                {...register("term", {
                  required: "This field is required"
                })}
              />
              <span 
                className={`
                  py-3 px-4 transition-all
                  ${errors.term ? 
                    "bg-red text-white" 
                    : 
                    "bg-slate-100 group-focus-within:bg-lime group-focus-within:text-slate-900"
                  }
                `}
              >
                years
              </span>
            </div>

            {errors.term && (
              <p id="term-error" className="text-red text-sm">{errors.term.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="rate">Interest Rate</label>

            <div 
              className={`
                group flex items-center 
                h-12 overflow-hidden
                rounded-sm border
                text-lg font-bold leading-[125%] transition-all
                ${errors.rate ? "border-red" : "border-slate-500 hover:border-slate-900 focus-within:border-lime"}
              `}
            >
              <input
                type="number"
                id="rate"
                step="any"
                min="0"
                className="h-full w-full px-4 text-slate-900 outline-none"
                aria-invalid={errors.rate ? "true" : "false"}
                aria-describedby={errors.rate ? "rate-error" : undefined}
                {...register("rate", {
                  required: "This field is required"
                })}
              />
              <span 
                className={`
                  py-3 px-4 transition-all
                  ${errors.rate ? 
                    "bg-red text-white" 
                    : 
                    "bg-slate-100 group-focus-within:bg-lime group-focus-within:text-slate-900"
                  }
                `}
              >
                %
              </span>
            </div>

            {errors.rate && (
              <p id="rate-error" className="text-red text-sm">{errors.rate.message}</p>
            )}
          </div>
        </div>

        <fieldset className="flex flex-col gap-3" aria-describedby={errors.type ? "type-error" : undefined}>
          <legend className="mb-3">Mortgage Type</legend>

          <label 
            className="
              flex items-center gap-4 
              h-12 px-4 
              rounded-sm border border-slate-500
              has-checked:bg-lime/15 has-checked:border-lime
              cursor-pointer hover:border-lime transition-all
            "
          >
            <input
              type="radio"
              className="
                appearance-none relative
                w-5 h-5 transition-all
                border-2 border-slate-700 rounded-full
                checked:border-lime
                checked:before:content-[''] checked:before:absolute
                checked:before:w-2.75 checked:before:h-2.75
                checked:before:bg-lime checked:before:rounded-full
                checked:before:inset-0 checked:before:m-auto
              "
              value="repayment"
              {...register("type", {
                required: "This field is required"
              })}
            />
            <span className="text-slate-900 leading-[125%] text-lg font-bold">Repayment</span>
          </label>

          <label 
            className="
              flex items-center gap-4 
              h-12 px-4 
              rounded-sm border border-slate-500
              has-checked:bg-lime/15 has-checked:border-lime
              cursor-pointer hover:border-lime transition-all
            "
          >
            <input
              type="radio"
              className="
                appearance-none relative
                w-5 h-5 transition-all
                border-2 border-slate-700 rounded-full
                checked:border-lime
                checked:before:content-[''] checked:before:absolute
                checked:before:w-2.75 checked:before:h-2.75
                checked:before:bg-lime checked:before:rounded-full
                checked:before:inset-0 checked:before:m-auto
              "
              value="interest"
              {...register("type", {
                required: "This field is required"
              })}
            />
            <span className="text-slate-900 leading-[125%] text-lg font-bold">Interest Only</span>
          </label>

          {errors.type && (
            <p id="type-error" className="text-red text-sm">{errors.type.message}</p>
          )}
        </fieldset>

      </div>

      <button 
        type="submit" 
        className="
          flex justify-center items-center gap-4 h-14 px-10 bg-lime rounded-full cursor-pointer hover:bg-[#ECED97]
          tablet:self-start transition-all
        "
      >
        <img src={calculatorIcon} alt="Calculator icon" />
        <span className="text-lg font-bold text-slate-900 leading-[125%]">Calculate Repayments</span>
      </button>
    </form>
  )
}

export default MortgageForm;
