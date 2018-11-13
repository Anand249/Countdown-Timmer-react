

// Third question funtion and it teurns 40

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}
console.log(mul(2)(4)(5));


// Founrth Question return Answer = 2

foo = 1;

(function () {

  foo = 2;

})();

var x = function () {

  foo = 3;

};

(function () {

  var foo = 4;

})();

console.log(foo);
