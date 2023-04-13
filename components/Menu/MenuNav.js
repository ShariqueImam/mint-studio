import React, { useState } from 'react'


const MenuNav = (props) => {
  const [menu, setMenu] = useState('lunch')
  const handleClick = (val) => {
    props.menuItem(val)
    setMenu(val)
  }
  const style = {
    wrapper: 'mx-auto flex w-[70%] md:w-[20%] justify-around',
    list1: `hover:text-[#EBB43D] transition duration-[300ms] font-bold  cursor-pointer ${menu === 'lunch' && 'border-b-2 border-[#EBB43D] text-[#EBB43D]'}`,
    list2: `hover:text-[#EBB43D] transition duration-[300ms] font-bold  cursor-pointer ${menu === 'desserts' && 'border-b-2 border-[#EBB43D] text-[#EBB43D]'}`,
    list3: `hover:text-[#EBB43D] transition duration-[300ms] font-bold  cursor-pointer ${menu === 'drinks' && 'border-b-2 border-[#EBB43D] text-[#EBB43D]'}`,
  }
  return (
    <ul className={style.wrapper} style={{ fontFamily: 'Poppins, sans-serif' }}>
      <li className={style.list1} onClick={() => handleClick('lunch')}>Lunch</li>
      <li className={style.list2} onClick={() => handleClick('desserts')}>Desserts</li>
      <li className={style.list3} onClick={() => handleClick('drinks')}>Drinks</li>
    </ul>
  )
}

export default MenuNav