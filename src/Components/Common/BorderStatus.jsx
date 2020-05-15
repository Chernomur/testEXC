import s from "./BorderStatus.module.css";
import React from "react";

const BorderStatus = (props) => {
    return(
        <div className={s.border}>
            {
                props.status === 'assigned' ?
                <div className={s.assigned}>ASD</div> : props.status === 'completed' ?
                <div className={s.completed}>COM</div> : props.status === 'unassigned'?
                <div className={s.unassigned}>UNA</div> : <div>{props.status}</div>
            }
        </div>
    )
}

export default BorderStatus;
