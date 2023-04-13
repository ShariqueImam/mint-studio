import React,{useEffect} from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
let ani =1
const style = {
  wrapper: 'my-12 md:my-24 w-[95%] md:w-[70%] mx-auto flex flex-col md:flex-row',
  heading: ' my-1 md:my-4 w-[95%] md:w-[85%] lg:w-[60%] text-4xl sm:text-4xl md:text-4xl lg:text-4xl text-gray-900 text-center text-center mx-auto',
  smallHeading: 'my-4 w-[95%] md:w-[60%] mx-auto my-4 text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-[#EBB43D]  text-center',
  details: 'my-4 text-gray-400 text-center mx-4',
  side1: 'my-4 md:my-0 w-[95%] md:w-[55%] flex items-center justify-around gap-8 i',
  side2: 'w-[95%] md:w-[45%] flex flex-col justify-around h-[60%] my-auto',

}

const Event = () => {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const animation1 = useAnimation()
  const animation2 = useAnimation()
  useEffect(() => {
    if (inView) {
      animation1.start({ opacity: 1,  x: 0 })
      animation2.start({ opacity: 1,  x: 0 })
    }
    if (!inView&& ani==1) {
      ani =0
      animation1.start({ opacity: 0, x: -200})
      animation2.start({ opacity: 0,  x: 200 })
    }
  }, [inView])
  

  return (
    <div className={style.wrapper}>
      <motion.div ref={ref} animate={animation1} className={style.side1}>
        <Image alt="Image for arranging the events" src={'https://res.cloudinary.com/shariqcloud/image/upload/v1652159534/Elroyale/2_ghe8zl.jpg'} height="450" width="350" />
        <Image alt="Image for arranging the events" src={'https://res.cloudinary.com/shariqcloud/image/upload/v1652159533/Elroyale/1_1_beaixv.jpg'} height="450" width="350" />
      </motion.div >
      <motion.div ref={ref} animate={animation2} className={style.side2}>
        <h2 className={style.smallHeading} style={{ fontFamily: 'Kristi, cursive' }}>Host Your Event</h2>
        <h2 className={style.heading} style={{ fontFamily: 'Yeseva One, cursive' }}>A Warm & Friendly Atmosphere</h2>
        <h2 className={style.details} style={{ fontFamily: 'Poppins, sans-serif' }}>Allow us to make your next special event extra special. We cater for all sized functions, ideal for your intimate gathering, our team can curate a menu to suit your taste</h2>
      </motion.div >

    </div>
  )
}

export default Event