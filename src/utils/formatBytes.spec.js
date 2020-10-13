const formatBytes = require('./formatBytes');

function assertEquals(result, expectedResult) {
    if (result !== expectedResult) {
        throw new Error(
            `This test is failing: Expected "${expectedResult}", got ${result}
        `);
    }
}

const value1 = formatBytes(900)
assertEquals(value1, '900MB');

const value2 = formatBytes(1900)
assertEquals(value2, '1GB 900MB');

const value3 = formatBytes(568200)
assertEquals(value3, '568GB 200MB');

const value4 = formatBytes(1234567)
assertEquals(value4, '1TB 234GB 567MB');

const value5 = formatBytes(1234000)
assertEquals(value5, '1TB 234GB');

console.log('All OK');