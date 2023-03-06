import './App.css';

import { useState } from 'react';

import reactLogo from './assets/react.svg';
import DiffView from './components/DiffView';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DiffView />
    </div>
  );
}

export default App;
