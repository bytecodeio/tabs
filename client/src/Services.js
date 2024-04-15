
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

import { NavLink, useNavigate } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";


import BootstrapTabsHorizontal from './components/sections/BootstrapTabsHorizontal.js';
import BootstrapTabsVertical from './components/sections/BootstrapTabsVertical.js';

import MaterialUIVertical from './components/sections/MaterialUIVertical.js';


import ToTopButton from './components/sections/ToTopButton.js';


import AppRouter from "./components/router/AppRouter";

import App from './App.js';

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip } from 'react-bootstrap';



import AOS from 'aos';
import "aos/dist/aos.css"


function Services({ tier, premium }) {



  return (


    <>
      <TopNav changeTier={tier} premium={premium}/>

      <SlideOut />



      <BootstrapTabsVertical />


      <ToTopButton />


    </>

  )

}

export default Services;
