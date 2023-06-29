import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');


setTimeout(() => 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App
      hideLoader={hideLoader}
      showLoader={showLoader} 
    />
  </React.StrictMode>,
)
, 3500
);
