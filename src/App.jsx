import './App.css'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Index from './Pages/Index'
import ProductDetails from './Pages/ProductDetails'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Footer from './Components/Footer'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Stores from './Pages/Stores'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import ShopFrutas from './Pages/ShopFrutas'
import ProductDetailsFrutas from './Pages/ProductDetailsFrutas'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Index />} />
        
        {/* Borrar al ultimo */}
        <Route path='/product/:id' element={<ProductDetails />}/> 

        <Route path='/productFrutas/:id' element={<ProductDetailsFrutas />}/>
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shopFrutas' element={<ShopFrutas />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
