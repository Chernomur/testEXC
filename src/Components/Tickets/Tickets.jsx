import React from "react";
import s from './Tickets.module.css'

const Tickets = (props) => {
    let date = (a) => {
        let date = new Date(a);
        let time = new Date(a);
        let options = {};
        options.hour = 'numeric';
        options.minute = 'numeric';
        return (date.toLocaleDateString('en-GB') + ' ' + time.toLocaleTimeString('en-GB', options));

    }


    return (
        <div className={s.tickets}>

            <table className={s.table}>
                <thead>
                <tr>
                    <th>OWNER</th>
                    <th>REPORTED</th>
                    <th>ASSET</th>
                    <th>STATUS</th>
                </tr>
                </thead>
                <tbody>
                {props.ticket.map(item => (<tr key={item.id}>
                    <td><img className={s.avatar}
                             src={item.owner.avatar}/>
                    </td>

                    <td>
                        {date(item.reportedTime)}</td>
                    <td> {item.asset.name}</td>
                    <td>  {item.status == 'assigned' ?
                        <div className={s.assigned}> ASD </div> : item.status == 'completed' ?
                            <div className={s.completed}> COM </div> :
                            <div className={s.unassigned}>UNA</div>} </td>
                        </tr>))}


                        </tbody>
                        </table>

                        </div>
                        )
                        }
                        export default Tickets;