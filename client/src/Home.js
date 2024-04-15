
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import {  signOut } from "firebase/auth";

import { NavLink, useNavigate } from 'react-router-dom';

import { BrowserRouter} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

import BootstrapTabsHorizontal from './components/sections/BootstrapTabsHorizontal.js';
import BootstrapTabsVertical from './components/sections/BootstrapTabsVertical.js';

import MaterialUIVertical from './components/sections/MaterialUIVertical.js';

import ToTopButton from './components/sections/ToTopButton.js';

import AppRouter from "./components/router/AppRouter";

import App from './App.js';



import AOS from 'aos';
import "aos/dist/aos.css"


function Home( { premium, tier } ) {


return (


  <>

<BootstrapTabsHorizontal/>



       </>

)

}

  export default Home;
