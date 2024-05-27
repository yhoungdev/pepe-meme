import React from 'react'


const presaleData = [
    {
        title: 'Presale Details',
        date: '27th May 2024'
    },
    {
        title: 'Presale End Date',
        date: '3rd June 2024'
    },
    {
        title: 'Presale Token Price',
        date: '[Insert Price per $Stormy]'
    },
    {
        title: 'Minimum Contribution',
        date: '0.1 ETH'
    },
    {
        title: 'Maximum Contribution',
        date: '1 ETH'
    },
    {
        title: 'Soft Cap',
        date: '20 ETH'
    },
    {
        title: 'Hard Cap',
        date: '100 ETH'
    }
];

const Presale = () => {
  return (
    <div className="container">
    <div className="py-[5em] my-[5em]">
      <center>
      <h2
        className="text-3xl md:text-5xl font-bold uppercase title_element text-center stroke-text text-transparent"
      >
        PRESALE
      </h2>
      </center>

      <div className="my-3 w-full  mx-auto md:w-[60%]">
            <p className='text-center'>
            Get in on the ground floor with the Stormy token presale! This is your chance to secure your share of Stormy before it hits the open market.
            </p>

            <div className='flex items-center gap-3
              flex-wrap my-4 justify-center '>
                {
                    presaleData.map(({ title, date }, index) => (
                        <div key={index} className='bg-gray-900 py-[40px]
                             px-[40px] rounded-lg w-full md:w-[300px] text-center'>
                            <p className="text-xl md:text-2xl font-bold default-text mb-5">{title}</p>
                            <p className="text-2xl">{date}</p>
                        </div>
                    ))
                }
            </div>
      </div>
    </div>
  </div>
  )
}

export default Presale