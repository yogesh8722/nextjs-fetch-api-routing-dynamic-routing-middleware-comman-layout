import React from 'react'

const PeramiterArowFunction = () => {
    const Fruit=(item)=>{
        alert(item)
    }
  return (
    <div>
      <button onClick={()=>Fruit("apple")}>Click</button>
    </div>
  )
}

export default PeramiterArowFunction
