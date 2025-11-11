import React, { useRef } from 'react'

function FocusButton() {

    const countRef = useRef(0);
    const increment =()=>{
        countRef.current = countRef.current + 1;
        console.log("Count : ", countRef.current)
    }
  return (
            <div>
                <button onClick={increment}>Click Me</button>
            </div>
  )
}

export default FocusButton
