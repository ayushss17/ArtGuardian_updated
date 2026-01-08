import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Components/redux/redux";
import {MetamaskProvider} from './Components/NavigationBar/MetaMaskContext' 
import App from './App'
import "./index.css";
ReactDOM.render(
  <MetamaskProvider> 
   <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </MetamaskProvider>
,
  document.getElementById('root')
);