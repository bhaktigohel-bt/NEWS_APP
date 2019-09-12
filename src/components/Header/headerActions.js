import { asyncActionNames, buildAsyncActions } from '../common/ActionCreator';
const path = asyncActionNames("PATH");
const pathActions = buildAsyncActions(path);

let setpath = function(path) {
    return function(dispatch) {
        dispatch(pathActions.success, path);
    }
}

export { setpath };