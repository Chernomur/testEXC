import React from "react";
import s from './Asset.module.css'
import date from "../../dateFu";
import BorderStatus from "../../Common/BorderStatus";
const Asset = (props) => {
    return (
        <div className={s.asset}>

                <div className={s.topic}>Asset</div>
                <div className={s.name}>Name    <div> {props.asset.name}</div></div>
                <div className={s.geo}>GeoCode <div>{props.asset.geoCode}</div></div>
                <div className={s.location}>Location <div className={s.border}> <span>
                    {props.asset.kmFrom.toFixed(3)}</span>
                <span>{props.asset.kmTo.toFixed(3)}</span>
                </div></div>

        </div>

    )
}
export default Asset;