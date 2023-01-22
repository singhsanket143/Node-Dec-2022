function x() {
    console.log("Wow");
}
// 
(function x(y) {
    console.log("hi", y);
})("Sanket");
//
x();


function f() {
    return 1;

}

function g() {
    return 2;
}
var i = 10;

// if(i%2 == 0) {
//     var res = f();
// } else {
//     var res = g();
// }

var res = (function evaluate(i) {
    if(i%2 == 0) return f();
    else return g();
})(i);
console.log(res);