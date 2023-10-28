import Button from "./components/Button/Button";

export default function App() {
  return (
    <>
      <div className="main-container">
        <header className="header">
          <h1 className="calculator__title">
            SPLI <br />
            TTER
          </h1>
        </header>
        <div className="calculator-container">
          <div className="inputs-section">
            <label htmlFor="bill" className="inputs-section__bill-label">
              Bill
            </label>
            <input
              id="bill"
              className="inputs-section__bill-input"
              type="number"
              value={0}
            />
            <fieldset className="buttons">
              <legend className="buttons__legend">Select Tip %</legend>
              <Button type="VeryDarkCyan">5%</Button>
              <Button type="VeryDarkCyan">10%</Button>
              <Button type="StrongCyan">15%</Button>
              <Button type="VeryDarkCyan">25%</Button>
              <Button type="VeryDarkCyan">50%</Button>
              <input
                type="number"
                className="buttons__input"
                placeholder="Custom"
              />
            </fieldset>
            <label htmlFor="people" className="inputs-section__people-label">
              Number of people <span className="alert"></span>
            </label>
            <input
              id="people"
              className="inputs-section__people-input"
              type="number"
              value="5"
            />
          </div>
          <div className="results-section">
            <div className="row-results">
              <div>
                <p className="results-section__tip-amount">Tip Amount</p>
                <p className="results-section__person-amount">/ person</p>
              </div>
              <div>
                <p className="results-section__tip-total">0</p>
              </div>
            </div>

            <div className="row-results">
              <div>
                <p className="results-section__total-amount">Total</p>
                <p className="results-section__total-person">/ person</p>
              </div>
              <div>
                <p className="results-section__total">0</p>
              </div>
            </div>
            <button className="resetBtn">RESET</button>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Marco Lopez</a>.
      </div>
    </>
  );
}
