a = (function(){
    var name = 0;
    return function(){
        name ++;
        return name;
    };
})();

console.log(a());
console.log(a());
console.log(a());
console.log(a());