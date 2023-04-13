import Home from '../components/Home/Home'
import Offer from '../components/Offer/Offer'
import Menu from '../components/Menu/Menu'
import Booking from '../components/Booking/Booking'
import Event from '../components/Event/Event'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { scroller } from 'react-scroll'
const App = () => {




  const onScroll = (value) => {
    scroller.scrollTo(`${value}`, {
      duration: 900,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <div
      className="overflow-x-hidden bg-[#FDFDFC] "
      style={{ fontDisplay: 'swap' }}
    >
      <div className="home flex">
        <Home onScroll={onScroll} />
      </div>
      <div className="about">
        <Offer />
      </div>
      {/* <div className="menu">
        <Menu />
      </div> */}
      {/* <div className="booking">
        <Booking />
      </div> */}
      {/* <div className="services">
        <Event />
      </div> */}
      <div className="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App

// this will render the page at the build time
// providing much better load times
export async function getStaticProps(context) {
  return {
    // the data in the props will be passed to the above function at the build time
    props: {}, // will be passed to the page component as props
  }
}
