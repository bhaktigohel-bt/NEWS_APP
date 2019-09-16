import { asyncActionNames, buildAsyncActions } from '../common/ActionCreator';
const path = asyncActionNames("PATH");
const pathActions = buildAsyncActions(path);

const request = asyncActionNames("REQUEST");
const requestActions = buildAsyncActions(request);

const loader = asyncActionNames("LOADER");
const loaderActions = buildAsyncActions(loader);

function setpath(path) {
    return function(dispatch) {
        dispatch(loaderActions.success(true));
        dispatch(requestActions.success([]));
        dispatch(pathActions.success(path));
    }
}
export { setpath };