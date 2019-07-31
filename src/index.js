import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ItemCardGroup from "./components/ItemCardGroup";

import "./styles.css";
import { getCoffeeData } from "./api/getData";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  // For the bonus
  const [retries, setRetries] = useState(0);

  /* Utilize the "useEffect" hook to get the data 
    and the various data states the page can be in

    getCoffeeData is a promise and can be called like:
      getCoffeeData().then(items => ...).catch(error => ...);

    Remember that useEffect takes two parameters, the callback 
    and an array of items it should change based upon. If you 
    only want to run the effect once, pass an empty array as the 
    second parameter (no value will rerun every render).

    Bonus: Make it so clickin on retry reloads the data
  */

  //
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Retries: {retries}</span>
      <button onClick={() => setRetries(retries => retries + 1)}>Retry</button>
      {error ? (
        <span>Oh no. An error occurred. {error}</span>
      ) : isLoading ? (
        <span>Loading</span>
      ) : (
        <ItemCardGroup data={data} onAddToCart={console.log} />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
