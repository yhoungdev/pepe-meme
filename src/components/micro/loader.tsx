import React from 'react'

const Loader = () => {
  return (
    <div className='h-[100vh] w-full bg-black
        flex items-center justify-center'>
        <h1 className="text-3xl md:text-5xl font-bold uppercase title_element text-center md:text-left stroke-text text-transparent">LOADING...</h1>
    </div>
  )
}

export default Loader