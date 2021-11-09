import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/app/App";
import { Provider } from "react-redux";
import store from "./logic/store";
import * as serviceWorker from "./serviceWorker";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

// import ReactGA from "react-ga";
import history from "./modules/app/components/history";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
}

function versionCheck() {
  //@ts-ignore
  const oldVersion = JSON.parse(localStorage.getItem("oldVersionCheck"));
  if (oldVersion === null) {
    localStorage.setItem("oldVersionCheck", JSON.stringify(true));
  } else if (oldVersion === false && history.location.pathname !== "/v2/farmDetails") {
    localStorage.setItem("oldVersionCheck", JSON.stringify(true));
  }
 
}


// ReactGA.initialize('UA-194718103-1');
// console.log("🚀 ~ file: index.tsx ~ line 19 ~ ReactGA", ReactGA)
versionCheck();
ReactDOM.render(
  <Provider store={store}>
    {/* <Web3ReactProvider getLibrary={getLibrary}> */}
    <App />
    {/* </Web3ReactProvider> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
