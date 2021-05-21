import React from 'react';
import { mount, shallow } from 'enzyme';
import Select from './Select';

const mockOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
];

describe('<Select />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Select loading={false} options={mockOptions} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('triggers onSelect', () => {
        const mockOnSelect = jest.fn();
        const wrapper = mount(<Select loading={false} options={mockOptions} onSelect={mockOnSelect} />);

        wrapper.find('select').simulate('change', { target: { value: '2' }});
        
        expect(wrapper.find('select').props().value).toEqual('2');

        expect(mockOnSelect).toHaveBeenCalled();
    });
});