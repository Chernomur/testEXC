import React from "react";
import s from './ticketsSelected.module.css'
import Owner from "./Owner/Owner";
import Details from "./Details/Details";
import Asset from "./Asset/Asset";

const TicketSelected = () => {
    return (
        <div className={s.ticketSelected}>
            <Owner/>
            <Details/>
            <Asset/>
        </div>

    )
}
export default TicketSelected;