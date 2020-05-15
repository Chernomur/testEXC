import React from "react";
import s from './NoTicketSelected.module.css'


const NoTicketSelected = (props) => {
    return (
        <div className={s.noTicketSelected}>
            <div className={s.outer}>
                <span className={s.text}>
                    <span className={s.x}>✕</span> <br/> No ticket selected
                </span>
            </div>
        </div>
    )
}
export default NoTicketSelected;