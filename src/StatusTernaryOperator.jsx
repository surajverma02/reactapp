import React, { useState } from 'react'

function StatusTernaryOperator() {

    let [set, reset] = useState(false);
  return (
    <div>
        {
            (set)?
            <h1>Hide
                <br/>
                <button onClick={()=>reset(!set)} className='px-3 py-1 bg-green-700 rounded-xl'>CLICK</button>
            </h1>
            :
            <h1>Show
                <br/>
                <button onClick={()=>reset(!set)} className='px-3 py-1 bg-green-700 rounded-xl'>CLICK</button>
            </h1>
        }
    </div>
  )
}

export default StatusTernaryOperator