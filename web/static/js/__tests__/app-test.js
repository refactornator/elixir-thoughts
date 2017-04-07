import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

jest.mock('../components/thought_input');
jest.mock('../components/thought_list');
import App from '../app';

describe('App', () => {
  it('renders the Thought Input and the Thought List', () => {
    const renderedApp = renderer
      .create(
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      )
      .toJSON();
    expect(renderedApp).toMatchSnapshot();
  });
});
