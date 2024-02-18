import React, { useState } from 'react'

function TwoWayBinding() {

    // Data first save to react useState then renders
    const [name, setName] = useState("");

  return (
    <>
    <form className="w-full flex justify-center">
        <input onChange={
            (e)=>{
                // data is pass to the react as a medioter b/w user and the website
                setName(e.target.value)
            }
        } type="text" className='w-1/2 h-10 text-black font-bold px-5' value={name} />
    </form>

    <div className="w-1/10 h-20 text-black text-2xl">{name}</div>
    </>
  )
}

export default TwoWayBinding