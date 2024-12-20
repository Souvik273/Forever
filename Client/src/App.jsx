import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PlaceOrders from './pages/PlaceOrders'
import Orders from './pages/Orders'

function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/collection' element={<Collection/>}/>
            <Route path='/product/:productId' element={<Product/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/place-order' element={<PlaceOrders/>}/>
            <Route path='/orders' element={<Orders/>}/>
        </Routes>
    </div>
  )
}

export default App
