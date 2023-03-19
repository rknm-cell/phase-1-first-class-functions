
function receivesAFunction(callback){
    callback();
};
function returnsANamedFunction(){
    return function bYeah() {};
};
function returnsAnAnonymousFunction(){
    return function () {};
};