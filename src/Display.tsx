import React from "react";
import s from "./Counter.module.css";


export type displayType = {
    count: number
}

export function Display(props: displayType) {
    return (
        <div>
            <span className={s.screen}>{props.count}</span>
        </div>
    )
}