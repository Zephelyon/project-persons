import * as action_types from '../constants';
import {
    updateObject
} from '../utilities';

const initialState = {
    person: null
}


const setPerson = (state, action) => {
    return updateObject(state, {
        person: action.person
    });
};


const person = (state = initialState, action) => {
    switch (action.type) {
        case action_types.SET_PERSON:
            return setPerson(state, action);
        default:
            return state;
    }
};


export default person;