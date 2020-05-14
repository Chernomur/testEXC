import {combineReducers, createStore} from "redux";
import ticketsReducer from "./Tickets-reducer";


let reducers  = combineReducers({
    tickets: ticketsReducer
}
);

let store = createStore(reducers);

export default store;