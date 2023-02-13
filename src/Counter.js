import React, { useState } from "react";
export const Counter = () => {
    const [count , setCount] = useState(0);
    // const [inc, setInc] = useState('0')
    // const [dec, setDec] = useState('0')
    const handelInc = () =>{ 
        return setCount(count +1)
    }
    const handelDec = () =>{ 
        return setCount(count -1)
    }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>This is the counter page.</h1>
      <p
        style={{
          fontSize: "3rem",
          textAlign: "center",
          fontWeight: "bold",
          margin: "2rem 0",
        }}
      >
        {count}
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            fontSize: "2rem",
            padding: "1rem 2rem",
            marginRight: "1rem",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
         onClick={handelInc}>
          +
        </button>
        <button
          style={{
            fontSize: "2rem",
            padding: "1rem 2rem",
            backgroundColor: "#f44336",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
         onClick={
            handelDec
         }>
       -
        </button>
      </div>
    </div>
  );
};
