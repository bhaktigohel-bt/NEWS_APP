import { combineReducers } from 'redux';
import { dashboardReducer, headerReducer } from '../components';
export const rootReducer = combineReducers({ dashboard: dashboardReducer, header: headerReducer });