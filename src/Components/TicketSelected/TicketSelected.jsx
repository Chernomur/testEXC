import React from "react";
import s from './ticketsSelected.module.css'
import Owner from "./Owner/Owner";
import Details from "./Details/Details";
import Asset from "./Asset/Asset";
import date from "../dateFu";

const TicketSelected = (props) => {
    return (
        <div className={s.ticketSelected}>
            <div className={s.nt}>
                <span className={s.ticketNo}>TICKET NO. </span> <
                span className={s.number}>{props.ticketSelected.number}</span>
                <span className={s.lut}>LAST UPDATED {date(props.ticketSelected.lastUpdatedTime)}</span>
            </div>
            <Owner owner={props.ticketSelected.owner}/>
            <Details details={props.ticketSelected}/>
            <Asset asset={props.ticketSelected.asset}/>
        </div>

    )
}
export default TicketSelected;