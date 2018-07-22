function add(){
    var count = 0;
    function plus(){
        count += 1;
        console.log(count);
    }
    plus();
    return count;
}

console.log(add());
console.log(add.plus());
console.log(add());
console.log(add());

var add2 = (function(){
    var count = 0;
    return function(){
        count += 1;
        return count;
    }
})();

console.log(add2());
console.log(add2());
console.log(add2());