
import React from 'react'


const style = {
    wrapper: 'w-[100%] mx-auto flex flex-col justify-around md:my-3 lg:my-8',
    input:'focus:ring-transparent outline-none focus:border-transparent border-gray-200 border-2 placeholder:text-gray-500 mx-1 md:mx-3 px-2 py-3 my-1 lg:my-3 rounded bg-[#e7e5e4] bg-opacity-[0.3]',
    btn:'px-3 py-3  bg-green-700 text-gray-50 mx-1 md:mx-3 my-5 hover:bg-green-700 transition duration-[300ms] cursor-pointer '

}
const ContactForm = () => {
    return (
        <form className={style.wrapper} style={{fontFamily:'Poppins, sans-serif'}}>
            <input type="text" className={style.input} placeholder="Name"/>
            <input type="text" className={style.input} placeholder="Email"/>
            <input type="text" className={style.input} placeholder="Phone"/>
            <button aria-label="Button to submit the form"  className={style.btn} type="submit">Send</button>
        </form>
    )
}

export default ContactForm;

