import { useState } from "react"

const Counter=()=>{
  const [myvalue,setmyvalue] = useState(0)
  const increment=()=>{
    setmyvalue(myvalue+1)
  }
  const decrement=()=>{
    setmyvalue(myvalue-1)
  }
  return (
  <div>
    <h1>{myvalue}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div> )
}

export default Counter