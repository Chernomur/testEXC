import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Tickets from "./Components/Tickets/Tickets";
import TicketSelected from "./Components/TicketSelected/TicketSelected";
import Loader from "./Components/Loader/Loader";

import {onTicketSelect, setIsFatching, setTickets} from "./Redux/Tickets-reducer";
import {connect} from "react-redux";
import * as axios from "axios";

import NoTicketSelected from "./Components/NoTicketSelected/NoTicketSelected";
class App extends React.Component {
    componentDidMount() {
        this.props.setIsFatching(true);
        axios
            .get(`https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json`)
            .then(response => {
                this.props.setIsFatching(false);
                this.props.setTickets(response.data);
            });
    }
    render() {
        return (
            <div className='wrapper'>
                {this.props.isFatching?
                    <Loader  isFatching={this.props.isFatching}/>
                    :<Header/>}
                    <div className='search'>
                    <input  type="text" />
                </div>
                <Tickets ticket={this.props.tickets} onTicketSelect={this.props.onTicketSelect}
                         ticketSelected={this.props.ticketSelected? this.props.ticketSelected: " "}
                />
                {this.props.ticketSelected
                    ?<TicketSelected ticketSelected={this.props.ticketSelected}/>
                    :<NoTicketSelected/>
                }


            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    tickets: state.tickets.ticketsData,
    isFatching: state.tickets.isFatching,
    ticketSelected:  state.tickets.selectedTicket

});


export default connect(mapStateToProps, {setTickets, setIsFatching, onTicketSelect})(App);

