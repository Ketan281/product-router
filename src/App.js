
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar';
import {Products} from './Components/Products'
import {Details} from './Components/Details'
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/'></Route>
       <Route path='/Products' element={<Products/>}></Route>
       <Route path='/Details' element={<Details/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
