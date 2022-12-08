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
exports.checkTime = function (input, times, func1, func2) {
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