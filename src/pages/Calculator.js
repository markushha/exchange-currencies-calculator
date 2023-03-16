import React from 'react';
import Navbar from '../components/Navbar';

function Calculator() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
        <label className='text-4xl font-semibold'>Calculator</label>
      </div>
    </>
  )
}

export default Calculator
