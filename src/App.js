import React from 'react';
import NavBar from './Components/NavigationBar/NavBar.jsx';
import Profile from './Components/Products/Profile.js';
import HomeInfo from './Components/Homepage/HomeInfo.js';
import Products from './Components/Products/Products.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MetamaskProvider } from './Components/NavigationBar/MetaMaskContext.js';
function App() {

  return (
    <div>
 <Router>
        <MetamaskProvider>
        <Routes>
          <Route exact path='/' element={<NavBar/>}/>
          <Route exact path='Home' element={<HomeInfo/>}/>
          <Route exact path='profile' element={<Profile/>} />
          <Route exact path='products' element={<Products/>}/>

        </Routes>
        </MetamaskProvider>
      </Router>  
   </div>
  );
}

export default App;
