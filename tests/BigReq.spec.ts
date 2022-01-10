import BigReq from '../src/BigReq';

describe('#constructor', () => {
  it('should throw an error if configuration object is missing', async () => {
    expect(() => {
      // @ts-ignore
      new BigReq();
    }).toThrow();
  });
});
