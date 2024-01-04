import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pagese/Home';
import About from './Pagese/About';
import Hadder from './Pagese/Hadder';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
function App() {
  
  return (

   

    <div className="App">
      <header className="App-header">
      <Hadder/>
      <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/About' element={<About/>}> </Route>
   </Routes>
  </BrowserRouter>


     
  
      </header>
    </div>
  );
}

export default App;
