import './App.css';
import { Footer } from './component/footer.js/footer';
import Header from './component/header/Header';
import { Main } from './component/main/main';
import About from './component/about/About';
import Services from './component/service/Services';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return(<>
  <BrowserRouter>
  <Header />

  <Routes>

  <Route path="/" element={<Main/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/services" element={<Services/>}></Route>

  </Routes>
 
  
    

  
  



     <Footer/>
    </BrowserRouter>
  </>)
}

export default App;
