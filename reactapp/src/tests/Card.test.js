import React from "react";
import Card from "../components/UI/Card/Card";
import { shallow, mount } from "enzyme";

var questionProp, wrapper, mockFunction;



describe('Testing Card Component', () => {
    beforeEach(() => {
        mockFunction = jest.fn();

        questionProp = {
            questionId : 2,
            question : "What color is are the leaves ?",
            option1 : "Blue",
            option2 : "Red",
            option3 : "Yellow",
            option4 : "Green",
            answer : "Green"
        }

        wrapper = mount(<Card 
            key={questionProp.questionId}
            question={questionProp.question}
            correctAnswerMarkUpdate={mockFunction}
            attempt={mockFunction}
            options={{
            option1: questionProp.option1,
            option2: questionProp.option2,
            option3: questionProp.option3,
            option4: questionProp.option4
            }}
            answer={questionProp.answer}
        />);
        
    })


    test('testcase8', () => {
        expect(wrapper.instance()).toBeDefined();
    });

    describe('Testing the display content of Card Component', () => {

        // Check if the component displays the question properly

        test('testcase9', () => {
            expect(wrapper.find('h4').text()).toBe('What color is are the leaves ?');
        })
        
        // check if all the options are rendered according to the test data

        test('testcase10', () => {
    
            let optionsList = ['Blue', 'Red', 'Yellow', 'Green'];
            let optionIterator = 0;
            expect(wrapper.find('button')).toHaveLength(4);
            
            wrapper.find('button').forEach(node => {
                expect(node.text()).toBe(optionsList[optionIterator]);
                optionIterator++;
            });
        })
    })

})