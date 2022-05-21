function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction(namedFunction) {
    return function namedFunction() {
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}