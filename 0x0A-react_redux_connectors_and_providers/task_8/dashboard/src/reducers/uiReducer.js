import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from '../actions/uiActionTypes';

import { Map } from "immutable";
import { logout } from "../actions/uiActionCreators";

export const initialUiState = {
	isNotificationDrawerVisible: false,
	isUserLoggedIn: false,
	user: null,
};

const uiReducer = (state = initialUiState, action) => {
	switch (action.type) {
		case DISPLAY_NOTIFICATION_DRAWER:
			return {
				...state,
				isNotificationDrawerVisible: true,
			};

		case HIDE_NOTIFICATION_DRAWER:
			return {
				...state,
				isNotificationDrawerVisible: false,
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				isUserLoggedIn: true,
			};

		case LOGIN_FAILURE:
			return {
				...state,
				isUserLoggedIn: false,
			};
		case LOGIN:
			return {
				...state,
				user: action.user,
			};

		case LOGOUT:
			return {
				...state,
				isUserLoggedIn: false,
				user: null
			};

		default:
			break;
	}
	return state;
};

export default uiReducer;
