import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Tickets from "./Components/Tickets/Tickets";
import TicketSelected from "./Components/TicketSelected/TicketSelected";
import Loader from "./Components/Loader/Loader";

import {setIsFatching, setTickets} from "./Redux/Tickets-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import s from "./Components/Tickets/Tickets.module.css";
class App extends React.Component {
    componentDidMount() {
        this.props.setIsFatching(true);
debugger;
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
                <Loader  isFatching={this.props.isFatching}/>
                <Header/>
                <div className='search'>
                    <input  type="text" />


                </div>
                <Tickets ticket={this.props.tickets}/>
                <TicketSelected/>

            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    tickets: state.tickets.ticketsData,
    isFatching: state.tickets.isFatching,

});


export default connect(mapStateToProps, {setTickets, setIsFatching})(App);

