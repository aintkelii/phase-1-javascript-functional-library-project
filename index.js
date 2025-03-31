function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    const values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      callback(values[i]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = 0; i < keys.length; i++) {
      result.push(callback(collection[keys[i]], keys[i], collection));
    }
  }
  return result;
}
function myReduce(collection, callback, acc) {
  let values = Array.isArray(collection)
    ? [...collection]
    : Object.values(collection);
  let startIdx = 0;

  if (acc === undefined) {
    acc = values[0];
    startIdx = 1;
  }

  for (let i = startIdx; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }

  return acc;
}
function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) return collection[i];
    }
  } else {
    const values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) return values[i];
    }
  }
  return undefined;
}
function myFilter(collection, predicate) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) result.push(collection[i]);
    }
  } else {
    const values = Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) result.push(values[i]);
    }
  }
  return result;
}
function mySize(collection) {
  return Array.isArray(collection)
    ? collection.length
    : Object.keys(collection).length;
}
function myFirst(array, n) {
  if (n === undefined) return array[0];
  return array.slice(0, n);
}
function myLast(array, n) {
  if (n === undefined) return array[array.length - 1];
  return array.slice(-n);
}
function mySortBy(array, callback) {
  return [...array].sort((a, b) => {
    const valA = callback(a);
    const valB = callback(b);
    if (valA < valB) return -1;
    if (valA > valB) return 1;
    return 0;
  });
}
function myFlatten(array, shallow, newArr = []) {
  if (shallow) {
    return newArr.concat(...array);
  }

  for (let element of array) {
    if (Array.isArray(element)) {
      myFlatten(element, false, newArr);
    } else {
      newArr.push(element);
    }
  }

  return newArr;
}
function myKeys(object) {
  return Object.keys(object);
}
function myValues(object) {
  return Object.values(object);
}