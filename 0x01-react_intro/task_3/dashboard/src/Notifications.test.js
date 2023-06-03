import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe("Notification Component Tests", () => {
  it("Notifications renders without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("Notifications renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("Notifications renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });
});