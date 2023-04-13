import React from 'react'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'
const style ={
    wrapper:'flex mx-auto items-center justify-center gap-8 md:gap-12 my-8 md:my-12',
    social:'text-gray-100 text-xl md:text-xl hover:mx-4 transition-all duration-[300ms] cursor-pointer',
}
const Social = () => {
  return (
    <div className={style.wrapper}>
      <a aria-label="link to facebook account facebook" className={style.social} target='_black' href="https://www.facebook.com"><BsFacebook/></a>
      <a aria-label="link to facebook account instagram" className={style.social} target='_black' href="https://www.instagram.com"><BsInstagram/></a>
      <a aria-label="link to facebook account twitter" className={style.social} target='_black' href="https://www.twitter.com"><BsTwitter/></a>
    </div>
  )
}    
export default Social;