import {expect} from 'chai';
import 'mocha';

describe('Test', () => {
  it('should return hello world', () => {
    const hello = () => 'hello, world';
    const result = hello();
    expect(result).to.equal('hello, world');
  });
});
