function receivesAFunction (myFunction) {
    return myFunction()
}

function returnsANamedFunction () {
    const namedFunction = function() {}
    return namedFunction
}

function returnsAnAnonymousFunction () {
    return function(){}
}