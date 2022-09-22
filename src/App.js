import './App.css';
import { Footer } from './component/footer.js/footer';
import Header from './component/header/Header';
import { Main } from './component/main/main';
import About from './component/about/About';
import Services from './component/service/Services';
import Jagdishpur from "./component/OfficeArea/Jagdishpur"
import Bihiya from './component/OfficeArea/Bihiya';
import Piro from './component/OfficeArea/Piro';
import Maliyabagh from './component/OfficeArea/Maliyabagh';
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
  <Route path="/jagdishpur" element={<Jagdishpur/>}></Route>
  <Route path="/bihiya" element={<Bihiya/>}></Route>
  <Route path="/piro" element={<Piro/>}></Route>
  <Route path="maliyabagh" element={<Maliyabagh/>}></Route>
  

  </Routes>
 
  
    

  
  



     <Footer/>
    </BrowserRouter>
  </>)
}

export default App;
