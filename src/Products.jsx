import React, { useState } from 'react'

function Products({number, data}) {
  const [a,b] = useState(true);
  return (
    <div className="text-white">
      <h1>{number}</h1>
      <h2>{data.name}</h2>
      <h2>{data.address}</h2>

      <h3>{a === false ? "Prime College" : "NCCS"}</h3>

      <button onClick={()=>b(!a)} className="w-20 bg-green-700 h-10">Click Me</button>
    </div>
  )
}

export default Products