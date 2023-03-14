import React from 'react'

function BlueButton({ title, onClick }) {
  return (
    <button onClick={onClick} className='bg-black text-white hover:bg-gray-200 hover:text-black transition-all h-12 w-24 rounded-xl'>{title}</button>
  )
}

export default BlueButton