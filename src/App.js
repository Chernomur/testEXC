import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Tickets from "./Components/Tickets/Tickets";
import TicketSelected from "./Components/TicketSelected/TicketSelected";
import Loader from "./Components/Loader/Loader";
import {getSearch, onSort, onTicketSelect, setIsFatching, setTickets} from "./Redux/Tickets-reducer";
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
        let inputText=React.createRef();
        let updateSearchText = () =>{
            let text = inputText.current.value;
            this.props.getSearch(text);
        };

        return (
            <div className='wrapper'>
                {this.props.isFatching ?
                    <Loader isFatching={this.props.isFatching}/>
                    : <Header/>}
                <div className='search'>
                    <input  type="text" onChange={updateSearchText} value={this.props.searchValue} ref={inputText}/>
                </div>
                <Tickets onSort={this.props.onSort}
                         searchValue={this.props.searchValue}
                         sortField={this.props.sortField}
                         ticket={this.props.tickets}
                         onTicketSelect={this.props.onTicketSelect}
                         ticketSelected={this.props.ticketSelected ? this.props.ticketSelected : " "}
                />
                {this.props.ticketSelected
                    ? <TicketSelected ticketSelected={this.props.ticketSelected}/>
                    : <NoTicketSelected/>
                }


            </div>
        )
    }

}

let mapStateToProps = (state) => ({
    searchValue: state.tickets.searchValue,
    sortField:state.tickets.sortField,
    tickets: state.tickets.ticketsData,
    isFatching: state.tickets.isFatching,
    ticketSelected: state.tickets.selectedTicket

});


export default connect(mapStateToProps, {setTickets,
    setIsFatching,
    getSearch,
    onTicketSelect,
    onSort})(App);

