import React, { useMemo, useState } from 'react'

const App = () => {

  const [weight,setWeight]=useState(70);
  const [height,setHeight]=useState(200);

  function onWeightChange(e){
    setWeight(e.target.value);
  }

  function onHeightChange(e){
    setHeight(e.target.value);
  }

  const output =useMemo(()=>{
    const calculateheight = height /100;

    return (weight/(calculateheight*calculateheight)).toFixed(1)
  },[weight,height])

  return (
    <div className='bg-gray-800 h-screen text-white items-center justify-center flex '>
      <div className='bg-white text-black p-4 rounded-md'>
        <h1 className='font-bold text-2xl mb-4 rounded-lg bg-blue-400 pl-10 pt-4 pb-4 pr-10'>BMI CALCULATOR</h1>
        <div className="input-section flex flex-col justify-center items-center">
          <p className='slider-output  font-semibold text-xl mb-3'>Weight: {weight}kg</p>
          <input className='input-slider cursor-pointer w-[70%] mb-6' type="range" 
          step="1" min="40" max="200" onChange={onWeightChange}/>

          <p className='slider-output font-semibold text-xl mb-3'>Height: {height}cm</p>
          <input className='input-slider cursor-pointer w-[70%] mb-6' type="range" 
          step="1" min="140" max="230" onChange={onHeightChange}/>
        </div>
        <div className="output-section flex justify-center items-center flex-col">
          <p className='font-bold text-xl mb-2 text-blue-600 mt-2 '>Your BMI is</p>
          <p className='output font-bold bg-blue-700 p-2 transition ease-in-out delay-150 hover:-translate-x hover:scale-110 rounded-full cursor-pointer text-white'>{output}</p>
        </div>
      </div>
    </div>
  )
}

export default App