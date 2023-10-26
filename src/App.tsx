export default function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">
          SPLI <br /> TTER
        </h1>
      </header>
      <section className="calculator-container">
        <div className="inputs-section">
          <label htmlFor="bill" className="inputs-section__bill-label">
            Bill
          </label>
          <input
            id="bill"
            className="inputs-section__bill-input"
            type="number"
            value="0"
          />
          <fieldset className="btns">
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>20%</button>
            <button>25%</button>
          </fieldset>
        </div>
        <div className="results-section"></div>
      </section>
    </>
  );
}
