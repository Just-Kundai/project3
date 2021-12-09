import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Slider from './components/slideshow/Slider';
import images from './images';



ReactDOM.render(

  <React.StrictMode>
    <Slider slides={images} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
