import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("Footer Component Test", () => {
  it("renders without crashing", () => {
    const footer = shallow(<Footer />);
    expect(footer.exists()).toEqual(true)
  });
  it("render the text Copyright", () => {
    const footer = shallow(<Footer />);
    expect(footer.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });
});