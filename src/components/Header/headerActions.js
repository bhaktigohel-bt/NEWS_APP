import { asyncActionNames, buildAsyncActions } from '../common/ActionCreator';
const path = asyncActionNames("PATH");
const pathActions = buildAsyncActions(path);

const request = asyncActionNames("REQUEST");
const requestActions = buildAsyncActions(request);

function setpath(path) {
    return function(dispatch) {
        dispatch(requestActions.success([]));
        dispatch(pathActions.success(path));
    }
}
export { setpath };