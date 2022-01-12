import React,{useEffect,useRef, useState} from 'react'

function UseRefEx2() {
   const [name, setName] = useState('')
   const renders = useRef(1)
   const prevName = useRef('')

   useEffect(() => {
      renders.current = renders.current + 1
      prevName.current = name
   }, [name])
   return (
      <div>
         <h2>Renders : {renders.current}</h2>
         <h2>Previous Name State : {prevName.current}</h2>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" />
      </div>
   )
}

export default UseRefEx2
