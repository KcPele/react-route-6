import React, {useState} from "react"
import { BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom'

// // pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
// import Cards from "./pages/Cards"


function App() {
 
  const [cartISEmpty] = useState(true)
  //no longer use Switch  but Routes
  //no longer use components={} but element={jsx eg <About />}
  //no longer use exac
  // allow for conditional navigation element{ condition ? jsx : jsx}
  //new redirect eg element={<Navigate to="/about" />} 
  // /path/* match any route after path
  return (
   
    <div className="App">
       {/* <Cards amount={4} /> */}

       <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
         
          <Route path="/products/:id/*" element={<ProductDetails />} />
    
          <Route path="/products" element={ <Products />} />

          <Route path="/redirect" element={<Navigate to="/about" />}  />
          <Route 
          path="/checkout" 
          element={cartISEmpty ? (<Navigate to="/products" />) : <p>checkout</p>} 
          />
        </Routes>
        
      </BrowserRouter> 
   </div>
  )
}

export default App