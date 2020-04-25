import React from 'react';
import logo from './logo.svg';
import './App.css';
import properties from './_data/airbnbs.json';
import PropertyList from './components/propertyList';

function App() {
  return (
    <div className={'main-content'}>
      <PropertyList properties={properties}></PropertyList>
    </div>
  );
}

export default App;
