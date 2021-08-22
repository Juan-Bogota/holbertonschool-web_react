import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

const USER = { email: "juank@lopez.com", password: "12345678" };
describe('<Header />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components render Img", () => {
    const wrapper = shallow(<Header user={USER} />);
    wrapper.update();
    expect(wrapper.find("div img")).toHaveLength(1);
  });

});
