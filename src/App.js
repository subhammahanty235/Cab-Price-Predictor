
import './App.css';
import {BrowserRouter , Route , Routes, useNavigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Notice from './components/Notice';

function App() {
  
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/ntce' element={<Notice/>}/>
          
        </Routes>
       
    </BrowserRouter>
  );
}

export default App;
