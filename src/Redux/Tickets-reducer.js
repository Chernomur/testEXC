import lodash from 'lodash'

const TOGGLE_IS_FATCHING = 'TOGGLE-IS-FATCHING';
const SET_TICKETS = 'SET-TICKETS';
const ON_TICKET_SELECT = 'ON-TICKET-SELECT';
const ON_SORT = 'ON-SORT';
const GET_SEARCH = 'GET-SEARCH';


let initialState = {
    ticketsData: [],
    isFatching: false,
    selectedTicket: null,
    sort: 'asc', //desc
    sortField:"id",
    searchValue:'',


};
const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_TICKETS:
            return {
                ...state, ticketsData: action.ticketsData
            };
        case ON_TICKET_SELECT:
            return {
                ...state, selectedTicket: action.selectedTicket

            };
        case ON_SORT:

            return {
                ...state,
                ...state.ticketsData, sortField: action.sortField,
                          sort: state.sort==='asc'? 'desc': 'asc',
                ticketsData: lodash.orderBy(state.ticketsData,action.sortField, state.sort),

            };
        case GET_SEARCH:

            return {
                ...state,
                searchValue: action.searchValue

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
export const onTicketSelect = (selectedTicket) => ({type: ON_TICKET_SELECT, selectedTicket});
export const onSort = (sortField) => ({type: ON_SORT, sortField});
export const getSearch = (searchValue) => ({type: GET_SEARCH, searchValue});
