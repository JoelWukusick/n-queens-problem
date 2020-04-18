//return the number of possible placements for n queens on an n sized chess board so that no queen attacks another.

var countNQueensSolutions = function (n) {
  var arr = [];
  for (var i = 0; i < n; i++) { arr.push(i); }
  var solutionCount = 0;
  var checks = 0;

  var permute = function (arr, start) {
    if (start === arr.length) { solutionCount++; }
    else {
      for (var i = start; i < arr.length; i++) {
        swap(arr, i, start);
        if (hasNoDiagonalConflicts(arr, start)) { permute(arr, (start + 1)); }
        else { checks++; }
        swap(arr, i, start);
      }
    }
  };

  var swap = function (array, i, start) {
    var tmp = array[i];
    array[i] = array[start];
    array[start] = tmp;
  };

  var hasNoDiagonalConflicts = function (arr, upTo) {
    for (var i = 0; i < upTo; i++) {
      if (Math.abs(arr[i] - arr[upTo]) === upTo - i) { return false; }
    }
    return true;
  };

  permute(arr, 0);

  return solutionCount;
}

// console.log(countNQueensSolutions(10));
// console.log(countNQueensSolutions(11));
// console.log(countNQueensSolutions(12));
// console.log(countNQueensSolutions(13));
// console.log(countNQueensSolutions(14));
// console.log(countNQueensSolutions(15));