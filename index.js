// Fizzbuzz using js
let output = [}
let count = 1;

 function fizzbuzz(){
    if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzbuzz")
    }else if(count % 3 === 0){
        output.push("fizz")
    }else if(count % 5){
        output.push("buzz")
    }else{
        count ++
    }
    output.push(count)
 }


//Fizzbuzz using while

let output = []
let count = 1;

     while( count <= 100){
 function fizzbuzz(){
    if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzbuzz")
    }else if(count % 3 === 0){
        output.push("fizz")
    }else if(count % 5){
        output.push("buzz")
    }else{
        count ++
    }
    output.push(count)
    }
}
