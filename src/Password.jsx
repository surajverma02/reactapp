import React, { useState } from 'react'

function Password() {
    let [show, setShow] = useState(false);
  return (
    <div>
        <input type={show? "text" :"password"} name="password" className='bg-slate-200 m-60' />
        <button onClick={()=>setShow(!show)} className='px-3 py-1 bg-green-700 rounded-xl'>Click</button>
    </div>
  )
}

export default Password