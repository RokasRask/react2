import { useEffect, useReducer, useState } from 'react';
import countReducer from '../../Reducers/niceCountReducer';
import * as action from '../../Actions/niceActions'

function NiceCounter() {

    const [count, dispatchCount] = useReducer(countReducer, {value: 0});
    const [addInput, setAddInput] = useState(0);
    const [addMulti, setAddMulti] = useState(0)

    useEffect(_ => {
        count.value === 0 && (setAddInput(0) || setAddMulti(0));
    }, [count]);


    return (
        <>
            <h2>Nice Counter: {count.value}</h2>
            <div>
                <button className='yellow' onClick={_ => dispatchCount(action.add1())}>+1</button>
                <button className='red' onClick={_ => dispatchCount(action.rem1())}>-1</button>
                <button className='green' onClick={_ => dispatchCount(action.add(addInput))}>Add</button>
                <input type="number" onChange={e => setAddInput(e.target.value)} value={addInput} style={{
                    width: '50px',
                    height: '38px',
                    margin: '10px 10px 0 10px',

                }} />
            </div>
            <div>
                <button className='green' onClick={_ => dispatchCount(action.multi(addMulti))}>Multiply</button>
                <input type="number" onChange={e => setAddMulti(e.target.value)} value={addMulti} style={{
                    width: '50px',
                    height: '38px',
                    margin: '10px 10px 0 10px',

                }} />
                <button className='red' onClick={_ => dispatchCount(action.reset())}>Reset</button>
                <button className='yellow' onClick={_ => dispatchCount(action.add5())}>+5</button>
            </div>
        </>
    );
}

export default NiceCounter;