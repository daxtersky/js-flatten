// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Flatten multidimentional arrays</h1>`;

//non recursive flatten deep using a stack
var arr1 = [1, 2, 3, [1, 2, 3, 4, [5, 6, [7, 8]]]];
console.log("A 0", arr1);
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //reverse to restore input order
  return res.reverse();
}
flatten(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
console.log("A 1", flatten(arr1));

//recursive flatten deep
function flatten(array) {
  var flattend = [];
  !(function flat(array) {
    array.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}
flatten(arr1);
console.log("B 1", flatten(arr1));
