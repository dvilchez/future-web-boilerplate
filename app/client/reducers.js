import Immutable from 'immutable';
import { LOGGED_USER } from '../../lib/login-cmp/actions'

const initialState = Immutable.Map({user:'anonymous'});

function helloApp(state=initialState, action) {
    if(action.type === LOGGED_USER){
        return state.set('user',  action.user);
    }
    return state;
}

export default helloApp;
