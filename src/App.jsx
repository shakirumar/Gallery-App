
import Gallery from './Pages/Gallery/Gallery'
// import HeroSection from './Pages/HeroSection/HeroSection'
import LandingPage from './Pages/LandingPage/LandingPage'
import {  Route, Routes,useLocation } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ImageForm from './Pages/ImageForm'

function App() {
  const location = useLocation();
  
  // Hide Navbar on Landing Page
  const hideNavbar = location.pathname === "/";
  console.log(hideNavbar);
  
  return (
<>
{/* <BrowserRouter> */}
{/* <Navbar/> */}
{!hideNavbar && <Navbar />}
<Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/account/login' element={<Login/>}/>
  <Route path='/account/signup' element={<Signup/>}/>
  <Route path='/gallery/images' element={<Gallery/>}/>
  <Route path='/gallery/about' element={<About/>}/>
  <Route path='/gallery/contact' element={<Contact/>}/>
  <Route path='/post/imagedata' element={<ImageForm/>}/>

</Routes>
<Footer/>
{/* </BrowserRouter> */}
</>
  )
}

export default App