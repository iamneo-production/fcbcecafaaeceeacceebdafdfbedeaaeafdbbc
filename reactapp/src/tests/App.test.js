import React from "react";
import App from "../App";
import { shallow, mount } from "enzyme";


var wrapper;
describe('Testing App Component', () => {
    test('testcase1', () => {
        wrapper = mount(<App />);
        expect(wrapper.instance()).toBeDefined();
        wrapper.unmount();
    });

    test('testcase2', () => {
        wrapper = mount(<App />);
        expect(wrapper.find('h1').text()).toBe('Quizz App');
        expect(wrapper.find('button').instance()).toBeDefined();
        wrapper.unmount();
    });

    test('testcase3', () => {
        wrapper = mount(<App />);
        wrapper.find('button').simulate('click')
        wrapper.find('Button').forEach(node => {
            expect(node.text()).not.toBe('Start Quiz');
        })
        wrapper.unmount();
    });

    test('testcase4', () => {
        const wrapper = mount(<App />);
        wrapper.find('button').simulate('click')
        wrapper.find('button').forEach(node => {
            expect(node.simulate('click'));
        });
        
        expect(wrapper.find('Button').last().text()).toBe('Show Results');
        wrapper.unmount();
    });

    test('testcase5', () => {
        const wrapper = mount(<App />);
        wrapper.find('button').simulate('click')
        wrapper.find('button').forEach(node => {
            expect(node.simulate('click'));
        });
        wrapper.find('button').last().simulate('click');
        expect(wrapper.find('button').text()).toBe('Start Quiz');

    })
})