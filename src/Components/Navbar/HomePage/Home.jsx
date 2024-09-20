import React from 'react'
import Benefits from './Benefits'
import BestSeelingprd from './BestSeelingprd'
import Products from './Products'
import Leaf from './Leaf'
import FruitsVeg from './Fruitsveg'

import GetOff from './GetOff'
import Products2 from './Products2'
import Cards from './Cards'


const Home = () => {
  return (
    <>
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div class="max-w-3xl">
      <h2 class="text-3xl font-bold sm:text-4xl">
     Join the Organic Movement 
      </h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt=""
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-16">
        <article class="space-y-4 text-black">
          <p className='text-4xl font-bold'>
Best Quality Products
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
            voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
            dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
            aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
            voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
          </p>
          <button  className='bg-green-600 px-3 py-2'> SHOP NOW </button>
        </article>
      </div>
    </div>
  </div>
</section>
<Benefits/>
<BestSeelingprd/>
<Products/>
<Leaf/>
<FruitsVeg/>
<GetOff/>
<Products2/>
<Cards/>
    </>
  )
}

export default Home