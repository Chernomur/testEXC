const TOGGLE_IS_FATCHING = 'TOGGLE-IS-FATCHING';
const SET_TICKETS = 'SET-TICKETS';


let initialState = {
    ticketsData: [],
    isFatching: false

};
const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_TICKETS:
            return {
                ...state, ticketsData: action.ticketsData
            };
        case TOGGLE_IS_FATCHING:
            return {
                ...state,
                isFatching: action.isFatching
            };
        default:
            return state;
    }
};
export default ticketsReducer;

export const setTickets = (ticketsData) => ({type: SET_TICKETS, ticketsData});
export const setIsFatching = (isFatching) => ({type: TOGGLE_IS_FATCHING, isFatching});
