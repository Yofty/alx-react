import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe("Login Component Test", () => {
  it("renders without crashing", () => {
    const log = shallow(<Login />);
    expect(log.exists()).toEqual(true);
  });
  it("should render 2 input tags and 2 label tag", () => {
    const log = shallow(<Login />);
    expect(log.find("label")).toHaveLength(2);
     expect(log.find("input")).toHaveLength(2);
  });
});