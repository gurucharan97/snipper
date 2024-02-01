import React from 'react';
import { useState } from 'react';

function sampleFunction() {
    const[color, setColor] = useState("red");

    return(
        <>
          <div>My state colore is {color}</div>
          <button
          type='button'
          onClick={() => setColor("blue")}
          >
          </button>
        </>
    )
}