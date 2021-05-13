var readline = require('readline');
var sumValue = 0;
var count = 0;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    sumValue += parseInt(line);
    count++;
    if(count == 4){
        console.log(sumValue);
        rl.close();
    }
})
