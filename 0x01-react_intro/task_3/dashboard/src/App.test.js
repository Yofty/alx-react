import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe("App Component Tests", () => {
  it('should render with out crushing', () => {
    const app = shallow(<App />);
    expect(app).toBeDefined(); 
  });

  it("should render div with class App-header", () => {
    const app = shallow(<App />);

    expect(app.find(".App-header")).toBeDefined();
    });
  it('should render div with class App-body', () => {
    const app = shallow(<App />);

    expect(app.find(".App-body")).toBeDefined();
  });
  it("should render div with class App-footer", () => {
    const app = shallow(<App />);

    expect(app.find(".App-footer")).toBeDefined();
  });
});
