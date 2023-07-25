const reverseString = require('./reversestring');

describe('Reverse String', () => {
  it('check equality', () => {
    expect(reverseString('alma')).toEqual('amla');
  });
});
