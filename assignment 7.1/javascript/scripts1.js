//global variable count adds the number
var count = 0;

//function that increments the count by 1 to the given limit
function countIncrement (countLimit){
    for(var i = 0; i<=countLimit; i++){
        count = count + i;
        console.log(i);
    }
    console.log('function invoked');
}
//executes the function for given number of times and it is global
function invokeTimes(times, fn, fnParam){
for (var i=0; i<times; i++){
       fn(fnParam);
  }
}
//function invoked 3 times
window.invokeTimes(3, countIncrement, 1);

//logged global object count to the console
console.log(window.count);

