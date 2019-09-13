import { asyncActionNames } from '../common/ActionCreator';
const request = asyncActionNames("REQUEST");

const INITIAL_STATE = { articleData: [], error: 0 };

let dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case request.success:
            return {...state, articleData: action.payload };
        default:
            return state;
    }
}
export { dashboardReducer }