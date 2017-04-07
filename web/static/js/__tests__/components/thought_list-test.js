import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
jest.mock('../../components/thought');
import { ThoughtList } from '../../components/thought_list';

describe('ThoughtList', () => {
  it('renders a list of thoughts correctly', () => {
    const thoughts = [
      {
        id: 2,
        category: 'life',
        text: 'This is a thought.',
        creationTime: new Date().toISOString(),
        _links: {
          self: {
            href: 'http://example.com/page/2'
          }
        }
      }
    ];
    const requestThoughtsMock = jest.fn();
    const renderedThoughtList = renderer
      .create(
        <MuiThemeProvider>
          <ThoughtList
            category="life"
            thoughts={thoughts}
            requestThoughts={requestThoughtsMock}
          />
        </MuiThemeProvider>
      )
      .toJSON();
    expect(requestThoughtsMock).toBeCalled();
    expect(renderedThoughtList).toMatchSnapshot();
  });
});
