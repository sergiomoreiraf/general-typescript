import { helloWorld } from './index';

describe('Hello World', () => {
  it('should return Hello World!', () => {
    expect(helloWorld('World')).toBe('Hello World!');
  });
});
