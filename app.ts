function add(n1: number, n2:number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

function returnNothing(): undefined {
    console.log("I am returning undefined");
    return;
}

printResult(add(5, 12));
returnNothing();