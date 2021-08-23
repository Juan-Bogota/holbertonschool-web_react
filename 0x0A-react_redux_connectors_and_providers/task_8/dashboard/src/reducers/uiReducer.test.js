import uiReducer, { initialUiState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('reducer', function () {
	it('initial state', function () {
		const state = uiReducer(undefined, {});
		expect(state).toEqual(initialUiState);
	});

	it('SELECT_COURSE', function () {
		const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
		expect(state).toEqual(initialUiState);
	});

	it('DISPLAY_NOTIFICATION_DRAWER', function () {
		const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
		expect(state).toEqual({
			...initialUiState,
			isNotificationDrawerVisible: true,
		});
	});
});
