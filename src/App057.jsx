import './buttons.scss';
import './app.css';
import './buttons.scss';
import A from './Components/057/A';
import { createContext, useState } from 'react';

export const CountContext = createContext();
export const CountContext2 = createContext();

function App() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    return (
        <div className="app">
            <header className="app-header">

                <button onClick={_ => setCount(c => c + 1)}>+1 (c1)</button>
                <button onClick={_ => setCount2(c => c + 1)}>+1 (c2)</button>
                <button onClick={_ => setCount3(c => c + 1)}>+1 (c3)</button>
                <button onClick={_ => setCount4(c => c + 1)}>+1 (c4)</button>

                <div className='flex-bin'>

                    <CountContext2.Provider value={{
                        count3,
                        count4
                    }}>
                        <CountContext.Provider value={count2}>
                            <A count={count} />
                        </CountContext.Provider>
                    </CountContext2.Provider>
                </div>


            </header>
        </div>
    );
}

export default App;