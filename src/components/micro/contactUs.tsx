import React from 'react'
import Button from './button'

const ContactUs = () => {
  return (
    <div className=' w-full p-4'>
        <form action="">
          
            <textarea  className='w-full py-5 my-3 px-3 rounded-md ' placeholder='Enter Message' />

            <Button>Send</Button>
        </form>
    </div>
  )
}

export default ContactUs
