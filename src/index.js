module.exports = function check(str, bracketsConfig) {

  let storage = []

  function FindPair(elem) {
    return bracketsConfig.find(x =>
      x.includes(elem)
    )
  }


  for (let element of str) {
    let pair = FindPair(element);

    if (element === pair[1]) {
      if (storage[0] === pair[0]) {
        storage.shift(storage[0]);
      } else if (pair[0] === pair[1]) {
        storage.unshift(element);

      } else {
        return false;
      }
    } else {
      storage.unshift(element);
    }


  }

  return storage.length === 0
}

