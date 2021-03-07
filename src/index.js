
exports.min = function min(array) {
  if (array == '' || array == [] || array == underfined)
    return 0;
  else {
    let min = array[0];
    for (let i = 1; i < array.length; i++)
      if (min > arrai[i])
        min = arrai[i];
    return min;
  }
}

exports.max = function max(array) {
  if (array == '' || array == [] || array == underfined)
    return 0;
  else {
    let max = array[0];
    for (let i = 1; i < array.length; i++)
      if (max > arrai[i])
        max = arrai[i];
    return max;
  }
}

exports.avg = function avg(array) {
  if (array == '' || array == [] || array == underfined)
    return 0;
  else {
    let sum = 0;
    for (let i = 0; i < array.length; i++)
      sum += array[i];
    return sum / array.length;
  }
}
