import { BrowserRouter, Routes, Route } from "react-router-dom"

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
  return (
    <BrowserRouter>
      <SalesBanner/>
      <PreHeader/>
      <Header/>
      <Menu/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
