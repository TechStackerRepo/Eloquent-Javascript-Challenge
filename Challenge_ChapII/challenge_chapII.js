// Looping A Triangle
let size = 7;
let ouput = "";
for(let i = 1 ; i <= size ; i++){
    ouput += "#";
    console.log(ouput);
}

for(let line = "#" ; line.length < 8 ; line += "#"){
    console.log(line);
}

// FizzBuzz
for(let number = 1 ; number <= 100 ; number++){
    if(number % 3 === 0 && number % 5 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
}

for(let n = 0 ; n < 100 ; n++){
    let ouputs = "";
    if(n % 3 == 0) ouputs += 'Fizz';
    if(n % 5 == 0) ouputs += 'Buzz';
    console.log(ouputs || n);
}

// Chessboard

let size = 8;
let board = ""
for(let y = 0 ; y < size ; y++){
    for(let x = 0 ; x < 0 ; x++){
        if((x + y) % 2){
            board += " ";
        }else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);