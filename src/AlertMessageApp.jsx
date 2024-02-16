import React from 'react'

function AlertMessageApp() {

    let displaName = () =>{
      alert("My name is suraj")
    }
    
  return (
    <div>
        <button onClick={displaName} className='px-3 py-1 bg-green-500 rounded-md'>Name</button>
    </div>
  )
}

export default AlertMessageApp