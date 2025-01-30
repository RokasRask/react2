import './buttons.scss';
import './app.css';
import Counter from './Components/055/Counter';
import View from './Components/055/View';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const [isGreen, setIsGreen] = useState(true);
  const [fontSize, setFontSize] = useState(20)

  const toggleColor = () => {
    setIsGreen(c => !c);
  };

  const handleFontSizeChange = e => {
    setFontSize(Number(e.target.value));
  };


  return (
    <div className="app">
      <header className="app-header">
        <View counter={counter} isGreen={isGreen} fontSize={fontSize}/>
        <Counter counter={counter} setCounter={setCounter} />
        <button onClick={toggleColor}>Change color</button>
        <div>
          <label>
            Font Size: {fontSize}px
            <input
              type="range"
              min="10"
              max="60"
              value={fontSize}
              onChange={handleFontSizeChange}
            />
          </label>
        </div>
      </header>
    </div>
  );
}

export default App;