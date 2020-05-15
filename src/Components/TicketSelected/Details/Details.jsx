import React from "react";
import s from './Detalis.module.css'
import date from "../../dateFu";
import BorderStatus from "../../Common/BorderStatus";

const Details = (props) => {
    return (
        <div className={s.details}>

            <div className={s.topic}>Details</div>
            <div className={s.reported}>Reported    <div> {date(props.details.reportedTime)}</div></div>
            <div className={s.status}>Status <BorderStatus status={props.details.status}/></div>
            <div className={s.description}>Description <div>{props.details.description}</div></div>

        </div>

    )
}
export default Details;