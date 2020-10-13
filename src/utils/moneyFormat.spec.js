import moneyFormat from './moneyFormat';

describe('moneyFormat', () => {
  it('works with two decimals', () => {
    const result = moneyFormat(99.99);
    expect(result).toEqual('$99.99');
  });

  it('works with integer numbers', () => {
    const result = moneyFormat(250);
    expect(result).toEqual('$250.00');
  });

  it('works with big numbers and two decimals', () => {
    const result = moneyFormat(9500.95);
    expect(result).toEqual('$9,500.95');
  });
});