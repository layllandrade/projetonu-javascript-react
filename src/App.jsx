import React from 'react';
import Header from './components/Header/Header.jsx';
import Products from './components/Products/Products.jsx';
import Provider from './context/Provider.jsx';

function App() {
  return (
    <Provider>
      <Header/>
      <Products/>
    </Provider>
  );
}

export default App;
