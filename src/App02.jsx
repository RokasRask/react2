import './buttons.scss';
import './app.css';
import { useReducer, useState } from 'react';
import countReducer from './Reducers/countReducer'
import NiceCounter from './Components/056/NiceCounter';

function App() {

    const [count, dispatchCount] = useReducer(countReducer, 0);
    const [addInput, setAddInput] = useState(0);
    const [addMulti, setAddMulti] = useState(0);

    const add1 = _ => {
        const action = {
            type: 'addOne' // nurodo, ką daryti su state
        }
        dispatchCount(action);
    }

    const remove1 = _ => {
        const action = {
            type: 'removeOne'
        }
        dispatchCount(action);
    }

    const add = _ => {
        const action = {
            type: 'add',
            payload: parseInt(addInput)
        }
        dispatchCount(action);
    }

    const multiply = _ => {
        const action = {
            type: 'multiply',
            payload: parseInt(addMulti)
        }
        dispatchCount(action);
    }

    return (
        <div className="app">
            <header className="app-header">
                <NiceCounter />
                <h2>Counter: {count}</h2>
                <div>
                    <button className='yellow' onClick={add1}>+1</button>
                    <button className='red' onClick={remove1}>-1</button>
                    <button className='green' onClick={add}>Add</button>
                    <input type="number" onChange={e => setAddInput(e.target.value)} value={addInput} style={{
                        width: '50px',
                        height: '38px',
                        margin: '10px 10px 0 10px',

                    }} />
                </div>
                <div>
                    <button className='green' onClick={multiply}>Multiply</button>
                    <input type="number" onChange={e => setAddMulti(e.target.value)} value={addMulti} style={{
                        width: '50px',
                        height: '38px',
                        margin: '10px 10px 0 10px',

                    }} />
                </div>
            </header>
        </div>

    );
}

export default App;