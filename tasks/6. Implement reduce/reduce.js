export function Reduce(array, reducer, initialValue) {
  array.map(x => initialValue = reducer(initialValue, x))
  return initialValue
}
