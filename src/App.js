import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header p-5">
        <div className="row mb-5">
          <div className="col">
            <img
              src={require("./logo_najhan.png")}
              className="App-logo"
              alt="logo"
            />
            <img
              src={require("./inv.png")}
              className="App-logo-side"
              alt="logo_inv"
            />
          </div>
        </div>
        <h3>This is an encryption application.</h3>
        <h5>
          The key for encryption will be a two digit number randomly generated.
        </h5>
        <h5>
          The 1st digit of the key indicates the number of characters to move
          forward for vowel characters, while the 2nd digit for consonant.
        </h5>
        <h5 className="mb-4">
          Each submission has a unique random key generated.
        </h5>
        <p>Input:</p>

        <div class="row justify-content-center">
          <div class="col">
            <input type="text" name="" id="" class="form-control"></input>
            <button type="submit" class="btn btn-warning">
              Submit
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
