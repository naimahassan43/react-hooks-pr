import React, {useRef} from "react";

function UseRefEx1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value)
    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'GoodBye'

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            ref={inputRef}
            id="name"
            placeholder="Enter Name"
          />
        
        </div>
      
      <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef} >Hello</p>
      </form>
    </div>
  );
}

export default UseRefEx1;
