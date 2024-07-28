import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode/LightDarkMode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import RandomColor from "../random-color/RandomColor";
import Accordian from "../accordion/Accordion";
import TreeView from "../tree-view/TreeView";
import { FeatureFlagsContext } from "./FeatureFlagsGlobalState";
import data from "../accordion/data";

function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    { key: "showLightAndDarkMode", component: <LightDarkMode /> },
    { key: "showTicTacToeBoard", component: <TicTacToe /> },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    { key: "showAccordion", component: <Accordian /> },
    { key: "showTreeView", component: <TreeView menus={{ data }} /> },
  ];

  if (loading)
    return (
      <div className="bg-dark container rounded p-3 mt-5 mb-5">
        <h1 className="text-light">Loading data...</h1>
      </div>
    );
  function checkEnabledFlags(getCurrentKey) {
    return enableFlags[getCurrentKey];
  }
  return (
    <div className="container bg-dark rounded p-3 mt-5 mb-5">
      <h1 className="text-light">Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}

export default FeatureFlags;
