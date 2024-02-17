import React from 'react'

const currYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="bg-gradient-to-r from-sky-700 to-indigo-900 rounded-lg flex items-center font-mono justify-center fixed bottom-2 w-full">
      <p className="text-white">Copyright @ {currYear}</p>
    </div>
  )
}

export default Footer
