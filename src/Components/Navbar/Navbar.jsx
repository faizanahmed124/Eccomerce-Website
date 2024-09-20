import React from 'react'
import { useState } from 'react';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
  return (
    <>
 <div className='hidden lg:block'>
 <div className='bg-gray-300 h-28 w-full flex justify-between'>
        <div className='flex justify-center items-center lg:gap-10'>
            <div> <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="" className='border border-dotted border-black h-16 mx-2' /></div>
            <div> <h2> Everything</h2></div>
            <div> <h2> Grocery</h2></div>
            <div> <h2> Juices</h2></div>
        </div>
        <div className='flex justify-center items-center lg:px-20 lg:gap-10'>
            <div> <h2> About </h2></div>
            <div> <h2> Contact</h2></div>
            <div> <h3 className='text-2xl'><ion-icon name="cart-outline"></ion-icon>$</h3></div>
            <div></div>
        </div>
    </div>
 </div>
<div className='flex justify-between  lg:hidden'>
    <div className='flex justify-center items-center mt-3'> <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="" className='border border-dotted border-black h-10 mx-2' />  </div>
     
 <div className="absolute top-3 right-2 mt-2 mr-4 lg:hidden text-xl">

<button onClick={handleMenuToggle}>
  {isMenuOpen ? (
    <ion-icon name="close-outline"></ion-icon>
  ) : (
    <ion-icon name="menu-outline"></ion-icon>
  )}
</button>
</div>
</div>

      {/* Collapsible navbar for small screens, opening from the left */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-400 w-full mt-2">
          <div className="flex flex-col items-start px-2 py-4 gap-2 font-sans">
          
     <div> 
        <ul className='mt-2 ml-10 pt-2'>

            <li className='underline text-xl decoration-black mt-3'> Everything </li>
            <li className='underline text-xl decoration-black mt-3'> Grocerices </li>
            <li className='underline text-xl decoration-black mt-3'> Juices</li>
            <li className='underline text-xl decoration-black mt-3'> About </li>
            <li className='underline text-xl decoration-black mt-3'> Contact</li>
        </ul>
     </div>

          </div>
        </div>
      )}
        
    </>
  )
}

export default Navbar