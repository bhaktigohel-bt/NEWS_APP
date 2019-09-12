import { asyncActionNames } from '../common/ActionCreator';
const path = asyncActionNames("PATH");
const INITIAL_STATE = { error: 0, route: 'Everything' };

let headerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case path.success:
            return {...state, route: action.payload }
        default:
            return {...state };
    }
}

export { headerReducer };