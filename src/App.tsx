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
            <legend className="btns__legend">Select Tip %</legend>
            <button className="btns__button">5%</button>
            <button className="btns__button">10%</button>
            <button className="btns__button btns__button--selected">15%</button>
            <button className="btns__button">20%</button>
            <button className="btns__button">25%</button>
            <input type="number" placeholder="Custom" />
          </fieldset>
          <label htmlFor="people" className="inputs-section__people-label">
            Bill
          </label>
          <input
            id="people"
            className="inputs-section__people-input"
            type="number"
            value="5"
          />
        </div>
        <div className="results-section"></div>
      </section>
    </>
  );
}
