import { ToastContainer } from "react-toastify"
import Banner from "./components/Banner"
import Exploration from "./components/Exploration"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



function App() {
  

  return (
    <>
      <Navbar />
      <Banner />
      <Exploration />
      <ToastContainer />
      <Footer/>

    </>
  )
}

export default App
