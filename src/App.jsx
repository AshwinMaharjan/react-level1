import React, { useState } from 'react'
import Products from './Products';

function App() {
  var [num1, num2] = useState(10);
  return (
    <>
    <div className="w-full h-80 bg-zinc-900">
      <Products number="23" data={{name:"Ashwin", address:"Nayabazar"}} />
    </div>
    </>
  )
}

export default App