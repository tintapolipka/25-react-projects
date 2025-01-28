
import Accordian from './components/accordian/index.jsx'
import RandomColor from './components/random-color/index.jsx'
import StarRating from './components/star-rating/index.jsx';
import ImageSlider from './components/image-slider/index.jsx';
import LoadMoreButton from './components/load-more-button/index.jsx';
import './App.css';
import TreeView from './components/tree-view/index.jsx';
import data from './components/tree-view/data.js'
import QRCodeGenerator from './components/qr-code-generator/index.jsx';

import { useState } from 'react';
import DarkLightMode from './components/dark-light-mode/index.jsx';
import ScrollIndicator from './components/scroll-indicator/index.jsx'
import TabsTest from './components/custom-tabs/tabs-test.jsx';
import ModalTest from './components/custom-modal-popup/modal-test.jsx';
import SearchAutocomplete from './components/search-autocomplete/index.jsx';
import TicTacToe from './components/tic-tac-toe/index.jsx';
import FeatureFlagsGlobalState from "./components/feature-flags/context/index.jsx"
import FeatureFlags from './components/feature-flags/index.jsx';
import UseFetchHookTest from './components/use-fetch/test.jsx';
import UseOnClickOutsideTest from './components/use-outside-click/test.jsx'
import ScrollToSection from './components/scroll-to-section/scroll-to-section.jsx';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom/index.jsx';

function App() {

  
  return (
    <div className="App">
      
      {/* <Accordian/> */}
  
    {/* <RandomColor/> */}

    {/* <StarRating noOfStars={6} />*/}
    {/*<ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
    {/* <LoadMoreButton /> */}
      
      {/* <TreeView menus={data}/> */}
      {/* <QRCodeGenerator/> */}
      {/* <DarkLightMode></DarkLightMode> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}></ScrollIndicator>
      <TabsTest/> */}
      {/* <ModalTest/> */}
      {/* <SearchAutocomplete/> */}
      {/* <TicTacToe/> */}
      {/* <FeatureFlagsGlobalState>
        <FeatureFlags/>
      </FeatureFlagsGlobalState> */}
      {/* <UseFetchHookTest/> */}
      {/* <UseOnClickOutsideTest/> */}
      {/* <ScrollToTopAndBottom/>
      <ScrollToSection/> */}
    </div>
  );
}

export default App;
