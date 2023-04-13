import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
let ani = 1;
const BookingBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(/img/4.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: auto;
  width: 100vw;
  height: 60vh;
`;

const style = {
  wrapper: 'flex flex-col items-center justify-around',
  heading: ' w-[95%] md:w-[85%] lg:w-[60%] text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F2ECDE] text-center text-center mx-auto',
  smallHeading: 'w-[95%] md:w-[60%] mx-auto my-4 text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-[#F2ECDE] text-center',
  detail: 'text-lg sm:text-lg md:text-md lg:text-md text-gray-100 text-center my-2',
  bookButton: 'my-3 transition duration-[300ms] px-6 py-2 md:px-6 md:py-2 text-gray-900 bg-gray-100 hover:bg-[#F2ECDE] font-semibold mx-auto',
}
const Booking = () => {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.8 } })
    }
    if (!inView && ani==1) {
ani=0;
      animation.start({ opacity: 0, y: 200, transition: { duration: 0.8 } })
    }
  }, [inView])

  return (
    <BookingBackground className="flex items-center justify-center">
      <motion.div className={style.wrapper} ref={ref} animate={animation}>
        <h2 className={style.smallHeading} style={{ fontFamily: 'Kristi, cursive' }} >We Create Delicious Memories</h2>
        <h2 className={style.heading} style={{ fontFamily: 'Yeseva One, cursive' }}>Pull Up A Chair. Take A Taste & Come Join Us</h2>
        <h3 className={style.detail} style={{ fontFamily: 'Poppins, sans-serif' }} >We have awesome recipes and the most talented chefs in town!</h3>
        <a aria-label="Button to book a table" href="https://wa.me/+923039695850?text=How%20can%20I%20help%20you?"
                 target="__blank" className={style.bookButton} style={{ fontFamily: 'Yeseva One, cursive' }}>Book a Table</a>
      </motion.div>
    </BookingBackground>
  )
}

export default Booking