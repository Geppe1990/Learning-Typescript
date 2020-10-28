function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function returnNothing() {
    console.log("I am returning undefined");
    return;
}
printResult(add(5, 12));
returnNothing();
