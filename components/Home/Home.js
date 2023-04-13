import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'
import HomeContent from './HomeContent'
import useWindowSize from '../hooks/windowSize'
import { motion } from 'framer-motion'

const style = {
  wrapper: '',
}

const variantsContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.5,
      when: 'beforeChildren', // make this animation to end before children animation occurs
    },
  },
}

const Home = (props) => {
  const screenWidth = useWindowSize()
  const HomeBackground = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),
      url('/bglarge.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    width: 100vw;
    height: 100vh;
  `
  const onScroll = (val) => {
    props.onScroll(val)
  }
  return (
    <motion.div variants={variantsContainer} initial="hidden" animate="visible">
      <HomeBackground className={style.wrapper}>
        {/* <Image src="/img/home.jpg" width="100" height="100" layout='fill' /> */}
        {/* navbar */}
        <Navbar onScroll={onScroll} />

        {/* Home content */}
        <HomeContent onScroll={onScroll}/>
      </HomeBackground>
    </motion.div>
  )
}

export default Home
