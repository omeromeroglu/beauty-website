import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

//Pages
import MainPage from './pages/MainPage'
import ProductDetails from "./pages/ProductDetails"


//Headers
import { PreHeader } from "./components/PreHeader/PreHeader"
import { SalesBanner } from "./components/SalesBanner/SalesBanner"
import { Header } from "./components/Header/Header"
import { Menu } from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer"



const App = () => {
  //selected state  
  const [selected, setSelected] = useState(null)

  //selected product


  return (
    <BrowserRouter>
      <SalesBanner/>
      <PreHeader/>
      <Header/>
      <Menu/>
      <Routes>
        <Route path="/" element={<MainPage selected={selected}/>}/>
        <Route path="product/:id" element={<ProductDetails  selected={selected}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
