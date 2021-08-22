import { shallow } from 'enzyme';
import React from 'react';
import App, { listNotificationsInitialState, mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut, AppContext } from './AppContext';

import { fromJS } from "immutable";
import { createStore } from "redux";
//import { Provider } from "react-redux";
import uiReducer, { initialUiState } from "../reducers/uiReducer";

const store = createStore(uiReducer, initialUiState);
describe('<App />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });


  it("mapStateToProps returns the right object from user Login", () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });
  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = {
      ui: fromJS({
        isNotificationDrawerVisible: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });
});
