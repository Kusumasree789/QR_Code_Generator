import React from 'react';
import './App.css';
import QrCodeGenerator from './QrCodeGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code Generator</h1>
        <QrCodeGenerator />
      </header>
    </div>
  );
}

export default App;