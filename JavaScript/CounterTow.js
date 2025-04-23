var createCounter = function(init) {
    let currentValue = init;
    return {
        increment: function(){
            currentValue += 1;
            return currentValue
        },
        decrement: function(){
            currentValue -= 1;
            return currentValue
        },
        reset: function(){
            currentValue = init;
            return currentValue
        }
    }
};
const counter = createCounter(5);
counter.increment(); // 6
counter.decrement(); // 4

console.log(counter.increment());
console.log(counter.decrement());