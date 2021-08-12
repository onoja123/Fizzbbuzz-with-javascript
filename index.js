output = [];
count = 1;

function fizzbuzz() {
 if ( count % 3 && count % 5){
  output.push("FizzBuzz")
 }
 esle if (count % 3){
  output.push("fizz")
 }
 else if (count % 5){
  output.push("fuzz")
 }else{
   output.push(count);
 }
 count++;
  console.log(output);
}
