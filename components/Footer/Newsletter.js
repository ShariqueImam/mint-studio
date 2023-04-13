import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'


const style = {
    wrapper: 'mx-auto flex items-center justify-center rounded w-[80%] md:w-[20%] border-2 border-double border-[#EBB43D] my-6',
    input: 'placeholder:text-stone-300 px-2 py-3 rounded bg-transparent focus:ring-transparent outline-none border-none text-[#EBB43D]',
}
const Newsletter = () => {
    return (
        <form className={style.wrapper} style={{fontFamily: 'Poppins, sans-serif'}}
        >
            <input type="text" className={style.input} placeholder="Enter your email" defaultValue="Hello!"/>
            <button aria-label="Icon to subscribe the newsletter" type='submit'><AiOutlineMail className="text-gray-100 text-2xl hover:text-[#EBB43D] transition duration-[300ms] hover:scale-[0.9]" /></button>
            {/* <div></div> */}
        </form>
    )
}

export default Newsletter