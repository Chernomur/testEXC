import React from "react";
import s from './Tickets.module.css'
import date from "../dateFu";
import BorderStatus from "../Common/BorderStatus";

const Tickets = (props) => {



    return (
        <div className={s.tickets}>

            <table className={s.table}>
                <thead>
                <tr>
                    <th></th>
                    <th>OWNER</th>
                    <th>REPORTED</th>
                    <th className={s.asset}>ASSET</th>
                    <th>STATUS</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {props.ticket.map(item => (

                    <tr key={item.ticketId}
                        onClick={props.onTicketSelect.bind(null, item)}
                        className={item.ticketId == props.ticketSelected.ticketId? s.active : s.nonactive }>
                        <th> </th>
                        <td>
                            <img className={s.avatar}
                                 src={item.owner.avatar} />
                        </td>

                        <td>
                            {date(item.reportedTime)}</td>
                        <td> {item.asset.name}</td>
                        <td>
                            <BorderStatus  status={item.status}/>
                        </td>
                        <th> </th>
                    </tr>))}


                </tbody>
            </table>

        </div>
    )


}

export default Tickets;