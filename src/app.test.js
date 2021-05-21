import React from 'react';
import { mount } from 'enzyme';
import { waitFor } from '@testing-library/react';
import * as helpers from './helpers'
import App from './App';

jest.useFakeTimers();

describe('<App /> loading state', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it ('should initially render loading state for <Select /> and <Countdowns /> component', () => {
    expect(wrapper.find('Select Loader')).toHaveLength(1);
    expect(wrapper.find('Countdowns Loader')).toHaveLength(1);
  });
});

describe('<App /> loaded', () => {
  let wrapper;
  
  beforeEach(async () => {
    wrapper = mount(<App />);

    await waitFor(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });
  });

  it('should renders <Select /> and <Countdowns /> with proper data', async () => {
    await waitFor(async () => {
      wrapper.update();
    });
    
    expect(wrapper.find('select').children()).toHaveLength(helpers.categories.length + 1);
    expect(wrapper.find('[className="countdowns-list"]').children()).toHaveLength(helpers.countdowns.length);
  });

  it('should filter by the selected category', async () => {
    await waitFor(async () => {
      wrapper.update();
    });

    wrapper.find('select').simulate('change', { target: { value: '3' }});

    expect(wrapper.find('[className="countdowns-list"]').children()).toHaveLength(1);
  });
});

