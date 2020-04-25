import React from 'react';
import logo from './logo.svg';
import './App.css';
import PolaroidPhoto from './components/polaroidPhoto';

function App() {
  return (
    <div className={'main-content'}>
      <PolaroidPhoto
        alt={''}
        src={'https://images.unsplash.com/photo-1490806230066-f7e6f7bf5052?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ca889535ea01f912f94ac4ddf0034e0&auto=format&fit=crop&w=500&q=80'}
        caption={'New York USA'}>
      </PolaroidPhoto>
    </div>
  );
}

export default App;
