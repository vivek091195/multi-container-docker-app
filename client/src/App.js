import React from "react";
import Fib from "./Fib";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{display: 'flex', alignItems: 'baseline'}}><h1 style={{float: 'left', textTransform: 'uppercase'}}>Fibonacci Calculator</h1><span style={{color: 'red'}}>&emsp;(Support is till 40, stores the result in Postgres and Redis DBs ) </span></span>
      <div
        style={{
          display: "flex",
          border: "1px solid",
          padding: "40px",
          marginTop: "50px",
        }}
      >
        <Fib />
      </div>
    </div>
  );
}

export default App;
