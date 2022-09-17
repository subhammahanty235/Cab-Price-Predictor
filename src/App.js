
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
       
    </BrowserRouter>
  );
}

export default App;
