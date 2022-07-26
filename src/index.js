import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter as Router } from 'react-router-dom' 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './Reducers'
//local
// export const serverBaseUrl="http://192.168.1.5:8080/"; 

//server
export const serverBaseUrl="http://localhost/web_proj_structure/"; 
export const serverApiUrl=serverBaseUrl+"apis/" 

let store = createStore(RootReducer) 

export const dataLimit=3;
export const commentLimit=5;

export const theme={
  primaryColor: "#fff", 
  secondaryColor: "#000",
  appBackgroundColor:"#fff",
  accentColor:"#13b989",
  labelOrInactiveColor:'#D3D3D3',
  addMoreButtonColor: '#00CED1',
  greyColor: '#404040',
  redColor: '#FF0000',   
  yellowColor: '#FFFF00',
  blueColor: '#4630EB',
  featureYesColor:"#07BD80",
  featureNoColor:'#FF0000',
  gradientColor: '#90EE90'   ,
  lightGreenColor: '#ABE098'   ,
  purpleColor: '#f4ebf9',
  darkPurpleColor: '#7859c5'
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
