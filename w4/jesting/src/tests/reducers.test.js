import MessagesReducer from '../reducers/MessagesReducer';

describe('MessagesReducer', () => {
  it('should return an empty array as the default value', () => {
    const action = {
      type: 'SOME_RANDOM_TYPE',
      payload: null,
    }
    const result = MessagesReducer(undefined, action);
    expect(result).toEqual([]);
  });
});

// describe

// it

// expect
