import React from 'react';
import { mount, shallow } from 'enzyme';
import { countdowns } from '../../helpers'
import Card from './Card';
import { act } from '@testing-library/react';

jest.useFakeTimers();

describe('<Card /> with timer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Card {...countdowns[0]} />);
    });

    it('should render the img', () => {
        expect(wrapper.find('img').exists()).toBeTruthy();
    });

    it('should render the title', () => {
        expect(wrapper.find('h2').exists()).toBeTruthy();
    });

    it('updates time', () => {
        wrapper.update();

        act(() => {
            jest.advanceTimersByTime(1000000);
            wrapper.update();
            const currTime = +wrapper.find('span').last().textContent;
            expect(currTime).toEqual(currTime - 1);
        });
    });
});

describe('<Card /> timer ends', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Card {...countdowns[0]} startsAt={new Date()} />);
    });

    it('should render Started when timer ends', () => {
        expect(wrapper.find('span').text()).toBe('Started');
    });
})

