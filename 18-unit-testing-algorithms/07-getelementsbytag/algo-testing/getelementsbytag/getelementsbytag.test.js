const config = require('./jest.config');
const getElementsByTag = require('./getelementsbytag');

describe('Get elements by tag', () => {
  it('should be a function', () => {
    expect(typeof getElementsByTag).toEqual('function');
  });

  it('should return the correct elements', () => {
    const root = document.createElement('div');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const span = document.createElement('span');

    root.appendChild(p1);
    root.appendChild(span);
    span.appendChild(p2);

    const result = getElementsByTag(root);

    expect(result).toEqual([p1, p2]);
  });
});
