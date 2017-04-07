import reducer from '../../reducers/thoughts';
import * as types from '../../ActionTypes';

describe('thoughts reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle RECEIVED_THOUGHTS', () => {
    expect(
      reducer([], {
        type: types.RECEIVED_THOUGHTS,
        payload: ['first', 'second', 'third']
      })
    ).toEqual(['first', 'second', 'third']);
  });

  it('should handle SUCCESSFULLY_CREATED_THOUGHT', () => {
    expect(
      reducer(['first', 'second'], {
        type: types.SUCCESSFULLY_CREATED_THOUGHT,
        payload: 'new'
      })
    ).toEqual(['new', 'first', 'second']);
  });

  it('should handle FORGOT_THOUGHT', () => {
    expect(
      reducer([{ id: 'first' }, { id: 'second' }], {
        type: types.FORGOT_THOUGHT,
        payload: 'second'
      })
    ).toEqual([{ id: 'first' }]);
  });
});
