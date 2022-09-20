import React from 'react'

const Button = ({AddOne, MinesOne,AddTwo,MinesTwo})=> {
  return (
    <>
   <div className='btn-div'>
   <button className='btn add' onClick={AddOne}> +1</button>
   <button  className='btn min' onClick={MinesOne}> -1</button>
   </div>
   <div className='btn-div'>
   <button className='btn add' onClick={AddTwo}> +2</button>
   <button  className='btn min' onClick={MinesTwo}>-2</button>
   </div>
   </>
  )
}

export default Button