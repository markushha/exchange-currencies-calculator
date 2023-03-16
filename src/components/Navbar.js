import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gray-600 h-14 w-full flex justify-between items-center text-center py-8 shadow-lg'>
      <div className='text-2xl mx-4 text-white font-semibold cursor-pointer'>
        Calculator & Convertor
      </div>
      <div className='flex justify-between w-[15%] items-center mr-8'>
        <Link className='text-xl font-semibold text-white hover:text-gray-400 cursor-pointer' to="/">Home</Link>
        <Link className='text-xl font-semibold text-white hover:text-gray-400 cursor-pointer' to="/currencies">Currencies</Link>
        <Link className='text-xl font-semibold text-white hover:text-gray-400 cursor-pointer' to="/calculator">Calculator</Link>
      </div>
    </nav>
  )
}

export default Navbar