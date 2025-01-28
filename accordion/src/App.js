import { useState } from 'react';
import Accordian from './components/accordian/index.jsx'
import RandomColor from './components/random-color/index.jsx'
import ImageSlider from './components/image-slider/index.jsx'

import './App.css';
import ScrollIndcator from './components/scroll-indicator/index.jsx';
import GithubAccountFinder from './components/github-accaunt-finder/index.jsx';
import TicTacToe from './components/tic-tac-toe/index.jsx';
import TryUseFetch from './components/useFetch-custom-hook/index.jsx';
import TestUseResponsives from './components/use-Responsive-hook/test.jsx';
import ScrollToTop from './scroll-top-bottom/scroll.jsx';
import WeatherApp from './components/weather-app/index.jsx';

function App() {

  return (
    <div className="App" >
      {/*<Accordian/>
      <RandomColor/>*/}
      {/* <ImageSlider limit={10} page={2}/> */}
      {/* <GithubAccountFinder/> */}
      {/* <TicTacToe/> */}
      {/* <TryUseFetch getUrl={'https://dummyjson.com/products/1'}></TryUseFetch>  */}
      {/* <TestUseResponsives></TestUseResponsives> */}
      {/* <ScrollToTop/> */}
      <WeatherApp></WeatherApp>
      
    </div>
  );
}

export default App;
