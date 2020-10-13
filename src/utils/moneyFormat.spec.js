const moneyFormat = require('./moneyFormat');

/*const firstResult = moneyFormat(99.99);
assertEquals(firstResult, '$99.99');

const secondResult = moneyFormat(250);
assertEquals(secondResult, '$250.00');

const thirdResult = moneyFormat(9500.95);
assertEquals(thirdResult, '$9,500.95');

function assertEquals(result, expectedResult) {
    if (result !== expectedResult) {
        throw new Error(
            `This test is failing: Expected "${expectedResult}", got ${result}
        `);
    }
}
    
console.log('All OK');*/

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