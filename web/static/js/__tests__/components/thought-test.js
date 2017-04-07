import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Thought } from '../../components/thought';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('Thought', () => {
  const thought = {
    id: 1,
    text: 'This is a thought.',
    creationTime: new Date().toISOString()
  };

  it('renders a single thought', () => {
    const renderedThought = renderer
      .create(
        <MuiThemeProvider>
          <Thought thought={thought} forgetThought={() => {}} />
        </MuiThemeProvider>
      )
      .toJSON();

    expect(renderedThought).toMatchSnapshot();
  });

  describe('when the delete button is pressed', () => {
    it('calls the forgetThought prop callback', () => {
      const forgetThoughtMock = jest.fn();
      const renderedThought = shallow(
        <Thought thought={thought} forgetThought={forgetThoughtMock} />
      );

      renderedThought.find(ActionDelete).simulate('click');

      expect(forgetThoughtMock).toBeCalledWith(1);
    });
  });
});
