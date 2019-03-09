import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './MapContainer';
import GMAPS_API_KEY from './credentials';

ReactDOM.render(
  <MapContainer apiKey={GMAPS_API_KEY} />,
  document.getElementById('root')
);

// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
