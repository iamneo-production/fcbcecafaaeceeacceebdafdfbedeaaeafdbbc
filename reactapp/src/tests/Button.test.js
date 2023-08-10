import React from "react";
import Button from "../components/UI/Button/Button";
import { shallow, mount } from "enzyme";

describe('Testing Button Component', () => {

    // render the button without any error
    
    test('testcase6', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.instance()).toBeDefined();
    })

    // displays the correct text inside the component

    test('testcase7', () => {
        const TestingInput = 'Button Works'
    const wrapper = shallow(<Button>{TestingInput}</Button>)
        expect(wrapper.text()).toBe(TestingInput)
    })

})