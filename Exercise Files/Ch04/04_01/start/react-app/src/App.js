import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const what = useState();
  console.log('what=',what);
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
