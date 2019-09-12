import { asyncActionNames } from '../common/ActionCreator';
const Article = asyncActionNames("ARTICLE");

const INITIAL_STATE = { articleData: [], error: 0 };

let dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Article.success:
            return {...state, articleData: action.payload };
        default:
            return state;
    }
}
export { dashboardReducer }