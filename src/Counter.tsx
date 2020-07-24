import React from "react";
import s from "./Counter.module.css"
import {Button} from "./Button";
import {Display} from "./Display";

export type buttonType = {
    reset: () => void
    increase: () => void
}

export type displayType = {
    count: number
}

export function Counter(props: displayType & buttonType) {

    return (
        <div className={s.main}>
            <div className={s.content}>

                <div>
                    <Display
                        count={props.count}
                    />
                </div>

                <div className={s.buttons}>
                    <Button
                        count={props.count}
                        increase={props.increase}
                        reset={props.reset}/>
                </div>

            </div>
        </div>
    )
}
