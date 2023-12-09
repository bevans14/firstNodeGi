
let arguments = process.argv.length; 

let sum = 0;
for (let i=2; i < arguments; i++){  
sum += Number(process.argv[i]);
        
    }
  console.log(sum)




