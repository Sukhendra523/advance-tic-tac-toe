import React, { useState } from 'react'
import { defaultBoxSize } from '../../constant';
import './styles.css'

const AddTicTacToe = ({setMultiTicTacToe}) => {
    const [customBoxSize, setCustomBoxSize] = useState('');
    const addTicTacHandler = () => {
        if (!customBoxSize) return;
        setMultiTicTacToe(prevValue=>[
            +customBoxSize,
            ...prevValue
        ])
        setCustomBoxSize('');
    }
    return (
        <div  className='form-container'>
            <input type="number" value={customBoxSize} onChange={(e) => setCustomBoxSize(e.target.value)} placeholder='Enter the Game Size'/>
            <button type="submit" onClick={addTicTacHandler}>Add</button>
        </div>
    )
}

export default AddTicTacToe