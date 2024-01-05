import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pagese/Home';
import About from './Pagese/About';
import Blog from './Pagese/Blog'; 
import { BrowserRouter , Routes, Route} from "react-router-dom";
 
function App() {
  
  return (

   

    <div className="App">
      <header className="App-header">
    
      <BrowserRouter>
   <Routes> 
    <Route path='/' element={<Home/>}> </Route>
    <Route path='/About' element={<About/>}> </Route>
    <Route path='/Blog' element={<Blog/>}> </Route>
   </Routes>
  </BrowserRouter>


     
  
      </header>
    </div>
  );
}

export default App;
