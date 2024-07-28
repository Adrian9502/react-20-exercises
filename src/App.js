import "./App.css";
import Accordion from "./components/accordion/Accordion";
import "bootstrap/dist/css/bootstrap.css";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import TreeView from "./components/tree-view/TreeView";
import data from "./components/tree-view/data.json";
import QrGenerator from "./components/qr-generator/QrGenerator";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import TabTest from "./components/custom-tab/TabTest";

import ModalTest from "./components/custom-modal-popup/ModalTest";
import GitHubProfileFinder from "./components/github-profile-finder/GitHubProfileFinder";
import DynamicSearch from "./components/dynamic-search/DynamicSearch";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import FeatureFlags from "./components/feature-flags/FeatureFlags";
import FeatureFlagsGlobalState from "./components/feature-flags/FeatureFlagsGlobalState";
import UseFetchTest from "./components/useFetch-custom/UseFetchTest";
import UseOutsideClickTest from "./components/use-outside-click/UseOutsideClickTest";
import UseWindowResizeTest from "./components/use-window-resize/UseWindowResizeTest";
import ScrollToTopAndBottom from "./components/scroll-top-bottom/ScrollToTopAndBottom";
import ScrollToSection from "./components/scroll-to-section.jsx/ScrollToSection";
function App() {
  return (
    <div className="App">
      <Accordion />

      <RandomColor />

      <StarRating noOfStars={10} />

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      <LoadMoreData />

      <TreeView menus={data} />

      <QrGenerator />

      <LightDarkMode />

      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />

      <TabTest />

      <ModalTest />

      <GitHubProfileFinder />

      <DynamicSearch />

      <TicTacToe />

      <FeatureFlagsGlobalState>
        <FeatureFlags />
      </FeatureFlagsGlobalState>

      <UseFetchTest />

      <UseOutsideClickTest />

      <UseWindowResizeTest />

      <ScrollToTopAndBottom />

      <ScrollToSection />
    </div>
  );
}

export default App;
