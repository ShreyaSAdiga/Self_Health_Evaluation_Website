import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main_home from'./pages/main_home';
import Home from './pages/main_home';
import About from './pages/about';
import Contact from './pages/contacts';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Instructions from './pages/instructions';
import Check1 from './pages/check1';
import Check2 from './pages/check2';
import CovidConfirm from './pages/CovidConfirm';
import CovidNotConfirm from './pages/CovidNotConfirm';
import Cardio from './pages/cardio';
import Dermato from './pages/dermato';
import General from './pages/general';
import Neuro from './pages/neurologist';
import Ortho from './pages/orthopaedic';
import Thank from'./pages/thank';

export default function App() {
  return (
  	<Router>
  	  <Routes>
        <Route path='/' element={<Main_home/>} />
  	  	<Route path='/home' exact element={<Home/>} />
  	  	<Route path='/about' element={<About/>} />
  	  	<Route path='/contact' element={<Contact/>} />
  	  	<Route path='/sign-up' element={<SignUp/>} />
		<Route path='/signin' element={<SignIn/>}/>
		<Route path='/instructions' element={<Instructions/>}/>
		<Route path='/check1' element={<Check1/>}/>
		<Route path='/check2' element={<Check2/>}/>
		<Route path='/CovidConfirm' element={<CovidConfirm/>}/>
		<Route path='/CovidNotConfirm' element={<CovidNotConfirm/>}/>
		<Route path='/cardio' element={<Cardio/>}/>
		<Route path='/dermato' element={<Dermato/>}/>
		<Route path='/general' element={<General/>}/>
		<Route path='/neurologist' element={<Neuro/>}/>
		<Route path='/orthopaedic' element={<Ortho/>}/>
		<Route path='/thank' element={<Thank/>}/>
                
  	  </Routes>
  	</Router>
  );
}
