import { asyncActionNames, buildAsyncActions } from '../common/ActionCreator';
import { http } from '../common/http';

const request = asyncActionNames("REQUEST");
const requestActions = buildAsyncActions(request);

function newsApi(url, formData = {}) {
    return function(dispatch) {
        http('/' + url + '?').then((result) => {
            dispatch(requestActions.success(result.sources));
        }).catch((error) => {
            console.log(error);
        })
    }
}

export { newsApi };