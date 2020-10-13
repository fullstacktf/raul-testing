function formatBytes(megabytes) {
  const units = ["MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let actualValue = megabytes;
  let array = [];
  let result = "";

  while (actualValue > 0) {
    array.unshift(Math.trunc(actualValue % 1000));
    actualValue = Math.trunc(actualValue / 1000);
  }

  for (let i = 0; i < array.length; ++i) {
    if (array[i] !== 0) {
      result += `${array[i]}${units[array.length - i - 1]} `;
    }
  }

  return result.trim();
}

module.exports = formatBytes;
