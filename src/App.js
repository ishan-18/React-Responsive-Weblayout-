import React from 'react';
import Hero from './components/BurgerHero';
import Products from './components/BurgerProducts';
import { GlobalStyle } from './globalStyles';
import {burgerData, dessertData} from './components/BurgerProducts/dataProducts'
import Feature from './components/BurgerFeature';
import Footer from './components/BurgerFooter';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Products heading="BestSellers" data={burgerData}/>
      <Feature />
      <Products heading="Desserts" data={dessertData}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
