import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("App Component Tests", () => {
    it('should render with out crushing', () => {
        const app = shallow(<App />);
        expect(app).toBeDefined();
    });
});