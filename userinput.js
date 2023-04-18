process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    // press ctrl+d in the terminal and then your main function will be executed automatically
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function readNumberArray() {
    let input = readLine(); // 1 2 3 4 5 
    input = input.split(" "); // ['1', '2', '3', '4', '5']
    input = input.map(value => Number(value)); // [1,2,3,4,5]
    return input;
}

function readNumberArrayByLine(noOfLines) {
    let result = [];
    for(let i = 0; i < noOfLines; i++) {
        result.push(Number(readLine()));
    }
    return result;
}

function readStringArray() {
    let input = readLine();
    return input.split(" ");
}

function readNumber() {
    return Number(readLine());
}

function readPairOfNumbers() {
    let input = readLine();
    input = input.split(" ").map(value => Number(value));
    return input;
}

function readBoolean() {
    return Boolean(readLine());
}

function main() {
    let testcases = Number(readLine()); // took input as string and then converted to a number
    for(let i = 0; i < testcases; i++) {
        let x, y;
        [x, y] = readPairOfNumbers();
        x = Number(x);
        y = Number(y);
        console.log(x + y);
    }
    let n = readNumber();
    let x = readNumberArrayByLine(n);
    let sum = 0;
    console.log(x);
    for(let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    console.log(sum);
}
