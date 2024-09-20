import React from 'react'

const GetOff = () => {
  return (
 <>
 <div className=' hidden bg-green-800 h-40 w-full lg:flex  justify-between items-center px-20'>

<div className=''>
    <h1 className='text-white text-3xl'>Get 25% Off On Your First Purchase!
    </h1>
</div>

<div className='mx-20'> <button className='bg-green-500 px-3 py-2 rounded-lg'> Try Monmatics</button></div>

   </div>
    {/* small screen */}
    <div className='grid grid-cols-1 bg-green-800 lg:hidden'>
        
<div className='flex items-center justify-center py-4 '>
    <h1 className='text-white text-3xl'>Unleash automation's power,
    <br />nurturing your every need</h1>
</div >
<div className='mx-20 flex items-center justify-center py-10'> <button className='bg-green-500 px-3 py-2 rounded-lg'> Shop Now</button></div>
    </div>
   
   
 </>
  )
}

export default GetOff