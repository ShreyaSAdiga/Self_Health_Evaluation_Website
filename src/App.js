import React from 'react';
import ReactDOM from "react-dom";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main_home from'./pages/main_home';
import Home from './pages/index';
import About from './pages/about';
import Events from './pages/events';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

export default function App() {
  return (
  	<Router>
  	  <Navbar />
  	  <Routes>
        <Route path='/' element={<Main_home/>} />
  	  	<Route path='/home' exact element={<Home/>} />
  	  	<Route path='/about' element={<About/>} />
  	  	<Route path='/events' element={<Events/>} />
  	  	<Route path='/team' element={<Teams/>} />
  	  	<Route path='/blogs' element={<Blogs/>} />
  	  	<Route path='/sign-up' element={<SignUp/>} />
                
  	  </Routes>
  	</Router>
  );
}
