exports.checkIntegrity = function (input, sol1, sol2, func1, func2) {
    if (func1(input) == sol1)
        console.log("SOL1: OK");
    else {
        console.log("SOL1: ERROR");
        console.log(func1(input));
    }
    if (func2(input) == sol2)
        console.log("SOL2: OK");
    else {
        console.log("SOL2: ERROR");
        console.log(func2(input));
    }
}
exports.checkTime = function (input, func1, func2, times = 1000) {
    console.time("sol1");
    for (let i = 0; i < times; i++) {
        func1(input);
    }
    console.timeEnd("sol1");
    console.time("sol2");
    for (let i = 0; i < times; i++) {
        func2(input);
    }
    console.timeEnd("sol2");
}
exports.logSolution = function (input, func1, func2) {
    console.log("sol1: ", func1(input));
    console.log("sol2: ", func2(input));
}
exports.crlfBullshit = function (arrayToBeCleansed) {
    for (i in arrayToBeCleansed) {
        arrayToBeCleansed[i] = arrayToBeCleansed[i].replace('\r', '');
    }
    return arrayToBeCleansed;
}