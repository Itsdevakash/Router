import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import './App.css';
import About from './component/About';
import Company from './component/Company';
import Contact from './component/Contact';
import Filter from './component/Filter';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Protected from './component/Protected';
// import Page404 from './component/Page404';
import User from './component/User';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
          <Navbar />
      <Routes>

    <Route path='/' element={<Protected  Component={Home}/>}/>
    <Route path='/about' element={<Protected  Component={About}/>}/>
    <Route path='/user/:name/:subname' element={<User/>}/>
    <Route path="/filter" element={<Protected  Component={Filter} />}/>
    {/* <Route path="/*" element={<Page404/>}/> */}
    <Route path="/*" element={<Navigate  to="/"/>}/>

    <Route path="contact" element={< Protected  Component={Contact}/>}>
    <Route path="company" element={<Company/>}/>
    
    </Route>
    <Route path='login' element={<Login/>}/>
      </Routes>
      
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
