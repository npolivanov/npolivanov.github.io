import {createStore} from 'redux'
function reducer ( state, action ) {
    switch( action.type ) {
        case 'INCREMENT':
            return {...state, ...{users: state.users.concat(action.payload) }
        }
        default:
            return state
    }
}

const store = createStore(reducer, {
    users: []
});

export default store;