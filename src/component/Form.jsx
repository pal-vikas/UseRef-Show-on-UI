import React, { useRef, useState } from 'react'

function Form() {

  const inputRef = useRef(null);
  const [name, setName] = useState('');
    function handleSubmit(event)
    {
        event.preventDefault();
        const inputValue = inputRef.current.value;
        setName(inputValue); // store in state to display on UI
        inputRef.current.value = ""
        console.log(inputRef.current.value)

    }

  return (
       <div>
             <div className="p-5 border mx-auto w-[700px] mt-50">
                            <form onSubmit={handleSubmit}>
                                <input ref={inputRef} type="text" placeholder="Enter your name" className="border p-2"/>
                                <button type="submit" className="ml-2 bg-blue-600 text-white px-3 py-1 rounded">Submit</button>
                            </form>
                            <h1 className="mt-4 text-xl">{name}</h1>
            </div>
    </div>
  )
}

export default Form
