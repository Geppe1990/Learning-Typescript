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

function addHandler(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

printResult(add(5, 12));
returnNothing();

//Tipo funzione che ritorna un number e che ha 2 numeri come parametri
let combineValues: (a: number, b: number) => number;

console.log(combineValues(8, 8))

addHandler(10, 29, (result) => {
    console.log(result)
})