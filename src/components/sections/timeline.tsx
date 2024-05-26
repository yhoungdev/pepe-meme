import React from 'react'

const Timeline = () => {
  return (
    
<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan-March 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Launch and Initial Distribution</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Launch and Initial Distribution</p>
        
    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March - May 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">NFT Marketplace Launch</h3>
       
    </li>
    <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June - August 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Events and Contests</h3>
    </li>

    <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sept - Nov 2024</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Expanded Partnerships and Marketing</h3>
    </li>
</ol>


  )
}

export default Timeline