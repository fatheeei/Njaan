import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Register from './components/Register';
import { Route ,Routes} from 'react-router-dom';
import Statebasics from './components/Statebasics';
import Use from './components/Use';
import Viewdata from './components/Viewdata';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>

      {/* <Login/> */}
      {/* <Signup/> */}
  
      <Navbar/>
      <Routes>
       <Route path='/reg' element={<Register/>}/> 
       <Route path='/u' element={<Statebasics/>}/>
       <Route path='/c' element={<Counter/>}/>
       <Route path='/use' element={<Use/>}/>
       <Route path='/View' element={<Viewdata/>}/>
            </Routes>
    
    </div>
  );
}

export default App;
