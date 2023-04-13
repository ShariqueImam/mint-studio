import React from 'react'
import SingleMenuItem from './SingleMenuItem'
import {motion} from 'framer-motion'
const style = {
    wrapper: ' my-8 px-2 md:px-6 py-2 md:py-2 w-[90%] md:w-[90%] lg:w-[65%] mx-auto flex justify-around flex-col md:flex-row',
    left:'my-4 flex flex-col border-double border-[3px] border-[#EBB43D] px-6 md:px-12 py-6 md:py-12',
    right:'my-4 flex flex-col border-double border-[3px] border-[#EBB43D] px-6 md:px-12 py-6 md:py-12',

}

const variantsContainer ={
	hidden:{
	opacity:0,
  y:10
  
	},
	visible:{
	opacity:1,
  y:-10,
	transition:{

	delay:0.2,
	when:'beforeChildren' // make this animation to end before children animation occurs
	}
	}
}
const DessertsMenu = () => {
  return (
    <motion.div className={style.wrapper} variants={variantsContainer}
    initial="hidden"
    animate='visible'>
              {/* left */}
      <div className={style.left}>
        <SingleMenuItem name='Smoked Meat Sandwich' ing='Baguette, basil, arugula, olives, cherry-tomatoes.' price='1200' />
        <SingleMenuItem name='Salmon Sandwich' ing='Salmon, butter, lemon juice, onion, garlic and salad.' price='2500' />
        <SingleMenuItem name='Pan Of Fried Eggs' ing='Eggs, bacon and cherry-tomatoes with bread' price='3000' />
        <SingleMenuItem name='Zinger Burger' ing='Croissants with strawberries, mascarpone, honey.' price='14000' />
        <SingleMenuItem name='DOuble Pattie Burger' ing='Oat granola with fresh blueberries, almond, yogurt.' price='18000' />
      </div>
      <div className={style.right}>

        <SingleMenuItem name='Grilled Fillet' ing='Paupiette of chicken, blue cheese, rosemary beans' price='2500' />
        <SingleMenuItem name='Chicken Crispy' ing='Salmon, butter, lemon juice, onion, garlic and salad' price='3500' />
        <SingleMenuItem name='Chicken Breast' ing='Smoked quail, crispy egg, spelt, girolles, parsley' price='1200' />
        <SingleMenuItem name='Salmon Steak' ing='Chicken fillet, ginger, garlic, honey, pepper and canola oil' price='8000' />
        <SingleMenuItem name='Salmon Steak' ing='Salmon, butter, lemon juice, onion, garlic and salad.' price='5500' />

      </div>
    </motion.div>
  )
}

export default DessertsMenu