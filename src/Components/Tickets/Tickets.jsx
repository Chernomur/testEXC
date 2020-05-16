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
                    <th onClick={props.onSort.bind(null, 'ticketId')}></th>
                    <th onClick={props.onSort.bind(null, 'owner.firstName')}
                        className={props.sortField === 'owner.firstName' ? s.sortActive : null}>OWNER
                    </th>
                    <th onClick={props.onSort.bind(null, 'reportedTime')}
                        className={props.sortField === 'reportedTime' ? s.sortActive : null}
                    >REPORTED
                    </th>
                    <th onClick={props.onSort.bind(null, 'asset.name')}
                        className={props.sortField === 'asset.name' ? s.sortActiveAs : s.asset}
                    >ASSET
                    </th>
                    <th onClick={props.onSort.bind(null, 'status')}
                        className={props.sortField === 'status' ? s.sortActive : null}
                    >STATUS
                    </th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {props.ticket.filter((data) => {
                    if (props.searchValue == null) return data
                    else if (data.owner.firstName.toLowerCase().includes(props.searchValue.toLowerCase()) ||
                        data.owner.lastName.toLowerCase().includes(props.searchValue.toLowerCase())
                    ) {
                        return data
                    }
                }).map(item => (

                    <tr key={item.ticketId}
                        onClick={props.onTicketSelect.bind(null, item)}
                        className={item.ticketId === props.ticketSelected.ticketId ? s.active : s.nonactive}>
                        <th></th>
                        <td>
                            <img className={s.avatar}
                                 src={item.owner.avatar}/>
                        </td>

                        <td>
                            {date(item.reportedTime)}</td>
                        <td className={s.asset}>
                            {item.asset.name}
                        </td>
                        <td>
                            <BorderStatus status={item.status}/>
                        </td>
                        <th></th>
                    </tr>))}


                </tbody>
            </table>

        </div>
    )


}

export default Tickets;