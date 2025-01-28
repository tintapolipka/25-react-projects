import { useContext } from "react"
import Accordian from "../accordian"
import TabTest from "../custom-tabs/tabs-test"
import DarkLightMode from "../dark-light-mode"
import RandomColor from "../random-color"
import TicTacToe from "../tic-tac-toe"
import TreeView from "../tree-view"
import { FeatureFlagsContext } from "./context/index.jsx"

export default function FeatureFlags(){

    const ctx = useContext(FeatureFlagsContext);
    console.log(ctx.enableFlags)
const componentsToRender = [
    {
        key: "showLightAndDarkMode",
        component: <DarkLightMode />
    },
    {
        key:"showTicTacToeBoard",
        component: <TicTacToe />
    },
    {
        key:"showRandomColorGenerator",
        component: <RandomColor/>
    },
    {
        key:"showAccordian",
        component: <Accordian/>
    },
    {
        key:"showTabs",
        component: <TabTest/>
    },
    {
        key:"showTreeView",
        component: <TreeView/>
    },
]

    function checkEnabledFlags(getCurrentKey){
        return ctx.enableFlags[getCurrentKey]? true : false;
    }

    if(ctx.loading) {return <h1> Loading data! Please wait!... </h1>}

    return <div>
        <h1>Feature Flags</h1>
        {
            componentsToRender.map((componentItem) =>checkEnabledFlags(componentItem.key)? componentItem.component : null)
        }
    </div>
}