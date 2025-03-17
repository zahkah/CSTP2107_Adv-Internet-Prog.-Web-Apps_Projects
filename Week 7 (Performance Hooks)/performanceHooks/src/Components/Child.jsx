import React, { memo } from 'react'

const Child = (props) => {
    
    console.log('Child Component Re-rendered');


    const modifyChildValue = () => {
        props.changeChildValue(Math.random() * 10)
    }

    return (
        <div>
            <h1>Child Value : {props.childValue}</h1>
            <button onClick={modifyChildValue}>Change Child Value</button>
        </div>
    )
}

export default memo(Child);