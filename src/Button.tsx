import React from "react";


export type buttonType = {
    reset: () => void
    increase: () => void
    count: number
}

export function Button(props: buttonType) {

    let incStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "inline-block",
        marginLeft: "2px",
        padding: "5px",
        cursor: "pointer"
    }

    let resetStyle = {
        width: "60px",
        height: "40px",
        border: "1px solid black",
        borderRadius: "10px",
        display: "inline-block",
        marginLeft: "10px",
        padding: "5px",
        cursor: "pointer"
    }


    return (
        <div>
            <button disabled={props.count === 5} onClick={props.increase} style={incStyle}>inc</button>
            <button disabled={props.count === 0} onClick={props.reset} style={resetStyle}>reset</button>
        </div>
    )
}