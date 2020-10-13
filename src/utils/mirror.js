export default function mirror(array) {
  const arraySort = array.sort();
  let result = arraySort;

  for (let i = arraySort.length - 2; i >= 0; --i) {
    result.push(arraySort[i]);
  }

  return result;
}
