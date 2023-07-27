import React, { createContext, useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LoginPage from './Home/Components/Login'
import SignupPage from './Home/Components/Signup';
import ResetPasswordPage from './Home/Components/Resetpwd';
import Wishlist from './Home/Wishlist';
import MyBag from './Home/MyBag';
import Navbar from './Home/FrontPage/Navbar';
import All from './Home/All';
import HomePage from './Home/FrontPage/HomePage';
import Terms from './Home/Terms';
import Pay from './Home/Pay';
import Contact from './Home/contact';


import Search from './Search/Search';
import Cart from './Cart/Cart';
import About from './Home/About';

export const UserContext=createContext();
const App = () => {
  const[search,setSearch]=useState();
  return (
    <UserContext.Provider value={[search,setSearch]}>

    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/all" element={<All />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/all/:search" element={<Search />} />
        {/* <Route path="/cart" element={<Cart/>} /> */}
        
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
