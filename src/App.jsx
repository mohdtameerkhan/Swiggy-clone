
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import DishCategory from "./components/DishCateogry";
import DishSlider from "./components/DishSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopResto from "./components/TopResto";
import Offer from "./Pages/Offer";
import Help from "./Pages/Help";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";




function App() {
  return (
    <BrowserRouter>

    <Header/>
    <Routes>
      <Route path='/' element={ 
           <>
              <Category />
              <DishSlider />
              <TopResto />
              <DishCategory />
              <Footer />
            </>}/>
      <Route path='/offer' element={<Offer/>} />
      <Route  path= '/help' element={<Help/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/search' element={<Search/>} />

    
    </Routes>
</BrowserRouter>
  )
}

export default App;


