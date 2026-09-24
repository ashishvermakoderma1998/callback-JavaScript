
// Q1. Simple Callback Question: Create a function greet() that accepts a callback and prints “Hello Ashish”.
function greet(callback){
    return callback();

}

function sayHello(){
    document.getElementById("demo").innerHTML="Hello Ashish";
}

// greet(sayHello); Q2. Addition Callback Question: Create add(a, b, callback). Add two numbers and pass the result to the callback. Test with 10 and 20.
function add(a, b, callback){
    let result = a + b;
    callback(result);
}

add (10,20, function(result){
    console.log(result);
    
});

// Q3. Subtraction Callback Question: Create subtract(a, b, callback) and return the subtraction result through the callback. Test with 50 and 30.

function sub(a, b, callback){
    let result = a - b;
    callback(result);
}

sub(50,30, function(result){
    console.log(result)
});

// Question: Create checkNumber(num, callback). Send “Even” when num is divisible by 2; otherwise send “Odd”.
function checkNum(num, callback){
    if (num % 2 === 0){
        callback("even")
    }else{
        callback("Odd")
    }
}

checkNum(34,function(result){
    console.log(result)
});

// Q5. Square Question: Create square(num, callback). Calculate num × num and pass the result to the callback.

function square(num, callback){
    let result = num * num;
    callback(result);
}

square(5, function (result){
    console.log(result);
    
    
});
// Question: Create cube(num, callback). Calculate the cube of a number.

function cube(num, callback){
    let result = num * num * num;
    callback(result);
}

cube(7,function(result){
    
    document.getElementById("demo2").innerHTML="7 * 7 * 7 ="+result;
});

// Question: Create toUpperCase(str, callback) and pass the uppercase string to the callback.

function toUpperCase(str, callback){
    let result = str.toUpperCase();
    callback(result);
};

toUpperCase("ashish verma",function(result){
    document.getElementById("demo3").innerHTML= result;
});

// Question: Create getLength(str, callback) and pass the string length to the callback.

function getLength(str, callback){
let result = str.length;
callback(result);
};

getLength("Suraj",function(result){
    document.getElementById("demo4").innerHTML= "length of (Suraj) "+result;
});

// Question: Create findLargest(a, b, callback) and pass the larger number to the callback.

function findLargest(a, b, callback){
    let largest;
    if (a > b){
        largest = a;
    } else{
        largest = b;
    }
    callback(largest);
};

findLargest(30,50, function(result){
    console.log(result)
});

// Q10. Total Price Question: Create calculateTotal(price, quantity, callback). Calculate price × quantity.

function calculateTotal(price,quantity,callback){
    let total = price * quantity;
    callback(total);
}

calculateTotal(50,3, function(total){
    console.log(total);
});

// Q11. Print Array Question: Create printArray(arr, callback). The callback should receive the array and print each value.

function printArray(arr, callback){
callback(arr);
}

printArray([10,20,22,25,35,50], function(arr){
    arr.forEach(function(value){
        
        document.getElementById("demo5").innerHTML +=value +"<br>";
    });
});

// Question: Create findEven(numbers, callback). Build a new array containing only even numbers.

function findEven(numbers, callback){
    let result = [];
    numbers.forEach(function(num){
        if(num % 2 === 0){
            result.push(num);
        }
    });
    callback(result);
}

findEven([10,15,20,25,30],function(result){
    console.log(result);
});

// Question: Create findMax(numbers, callback) and pass the largest array value to the callback.

function findMax(numbers, callback){
    let max = numbers[0];
    numbers.forEach(function(num){
        if(num > max){
            max = num;
        }
    });
    callback(max);
}

findMax([5,10,12,15,55,65],function(result){
    console.log(result);
});

// Question: Create calculateSum(numbers, callback) and pass the total sum to the callback.

function calculateSum(numbers, callback){
    let sum = 0;
    numbers.forEach(function(num){
        sum += num;
    });
    callback(sum);
}
calculateSum([10,12,13,14,55], function(result){
    console.log(result);
});


