import React from "react";
import s from './Owner.module.css'

const Owner = (props) => {

    return (
        <div className={s.owner}>
            <div className={s.topic}>Owner</div>
            <div className={s.avatar}><img src={props.owner.avatar}/></div>
            <div className={s.name}>{props.owner.firstName} {props.owner.lastName}</div>
            <div className={s.specialities}>{props.owner.specialities.toString().toUpperCase()}</div>


        </div>

    )
}
export default Owner;