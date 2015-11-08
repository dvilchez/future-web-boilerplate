import Immutable from 'immutable';

const initialState = Immutable.Map({user:'anonymous'});

function hello(state=initialState, action) {
    return state;
}

export default hello;
