import reducer from '../../reducers/thought';
import * as types from '../../ActionTypes';

describe('thought reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  describe('when the thought property in local storage is set', () => {
    it('returns that property as the default thought', () => {
      localStorage.setItem('thought', 'This is a stored away thought.');
      expect(reducer(undefined, {})).toEqual('This is a stored away thought.');
      localStorage.removeItem('thought');
    });
  });

  it('should handle SUCCESSFULLY_CREATED_THOUGHT', () => {
    expect(
      reducer('Original thought.', {
        type: types.SUCCESSFULLY_CREATED_THOUGHT,
        payload: ''
      })
    ).toEqual('');
    expect(localStorage.getItem('thought')).toBeNull();
  });

  it('should handle CHANGE_THOUGHT', () => {
    expect(
      reducer('Original thought', {
        type: types.CHANGE_THOUGHT,
        payload: 'Original thought!'
      })
    ).toEqual('Original thought!');
    expect(localStorage.getItem('thought')).toBe('Original thought!');
  });
});
