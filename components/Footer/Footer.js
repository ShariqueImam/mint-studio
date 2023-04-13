import React from 'react'
import Newsletter from './Newsletter'
import Signature from './Signature'
import Social from './Social'
import MainFooter from './MainFooter'
const style = {
  wrapper: 'bg-green-800 pt-24',

}

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <MainFooter />
      </div>
      <div className={style.social}>
        <Social />
      </div>
      <div className={style.signature}>
        <Signature />
      </div>
    </div>
  )
}

export default Footer