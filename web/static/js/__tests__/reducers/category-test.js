import reducer from '../../reducers/category';
import * as types from '../../ActionTypes';

describe('category reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('work');
  });

  describe('when the category property in local storage is set', () => {
    it('returns that property as the default category', () => {
      localStorage.setItem('category', 'life');
      expect(reducer(undefined, {})).toEqual('life');
      localStorage.removeItem('category');
    });
  });

  it('should handle CHANGE_CATEGORY', () => {
    expect(
      reducer('work', {
        type: types.CHANGE_CATEGORY,
        payload: 'life'
      })
    ).toEqual('life');
  });
});
