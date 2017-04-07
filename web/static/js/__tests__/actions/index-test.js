import configureMockStore from 'redux-mock-store';
import * as ActionTypes from '../../ActionTypes';
import * as actions from '../../actions';

const mockStore = configureMockStore();

describe('changeCategory', () => {
  it('uses CHANGE_CATEGORY to change the category', () => {
    const expectedActions = [
      { type: ActionTypes.CHANGE_CATEGORY, payload: 'awesome-category' }
    ];
    const store = mockStore({ category: 'lame-category' });

    store.dispatch(actions.changeCategory('awesome-category'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('changeThought', () => {
  it('uses CHANGE_THOUGHT to change the text of the thought', () => {
    const expectedActions = [
      { type: ActionTypes.CHANGE_THOUGHT, payload: 'My original thought.' }
    ];
    const store = mockStore({ thought: 'An unoriginal thought.' });

    store.dispatch(actions.changeThought('My original thought.'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
