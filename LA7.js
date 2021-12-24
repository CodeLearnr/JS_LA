// 1.  Write a JavaScript program to remove the last element from the right of a given array of elements.

function arrPop()
{
    let arr = [1,2,3,4,5,6];
    arr.pop();
    let a = "Array after the right element has been removed: ["+ arr +"]";
    q1.style.color = "red";
    document.getElementById("q1").innerHTML= a;
}

// 2.  Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
var p;
function checkPrime(number){
// take input from the user
number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;


q2.style.color = "red";
// check if number is equal to 1
if (number === 1 ) {
    document.getElementById("q2").innerHTML=("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.getElementById("q2").innerHTML= (`${number} is a prime number`);
    } else {
        document.getElementById("q2").innerHTML= (`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    document.getElementById("q2").innerHTML= ("The number is not a prime number.");
}
}

// 3.  Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function Second_Greatest_Lowest()  
{  
    q3.style.color = "red";   
    var arr_num = [12,22,34,24,15];
    arr_num.sort(function(x,y)  
            {  
            return x-y;  
            });  
    var uniqA = [arr_num[0]];  
    var result = [];  
        
    for(var j=1; j < arr_num.length; j++)  
    {  
        if(arr_num[j-1] !== arr_num[j])  
        {  
        uniqA.push(arr_num[j]);  
        }  
    }  
        result.push(uniqA[1],uniqA[uniqA.length-2]);  
    return document.getElementById("q3").innerHTML= "The second lowest and second greatest numbers are: "+ result.join(', ');  
   }  
  


// 4.   Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.
function exp()
{
        var ans = 1;
        var b = prompt("Enter the base number: ");        
        var n = prompt("Enter the power number: "); 
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        q4.style.color = "red";
        let c = document.getElementById("q4").innerHTML = (`The value of ${b} to the power of ${n} is: ${ans}`) ;

        return c;
}

// 5.  Write a JavaScript program that will return true if the string is y/yes or false if the string is n/no
const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;

function yesOrNo()
{
 q51.style.color = "red";
 q52.style.color = "red";
 q53.style.color = "red";
 q54.style.color = "red";
 document.getElementById("q51").innerHTML  = "Input: y. Return: " + (yesNo('y')); 
 document.getElementById("q52").innerHTML  = "Input: yes. Return: " + (yesNo('yes'));  
 document.getElementById("q53").innerHTML  = "Input: no. Return: " + (yesNo('no')); 
 document.getElementById("q54").innerHTML  = "Input: n. Return: " + (yesNo('n', true));  
} 

// 6.  Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabet_order()
{
    q6.style.color = "red";
    str = "Put me in order";
    return document.getElementById("q6").innerHTML  = "The string in alphabetical order is: "  + (str.toLowerCase().split('').sort().join(''));
}
//document.getElementById("q6").innerHTML  = ("The string in alphabetical order is: " +alphabet_order("Put me in order"));

// 7.  Write a JavaScript program to get the sum of a given array
function sumNum(){
    q7.style.color = "red";
    var arr2 = [74, 18, 27, 1, 12]
        var sum = 0;
        arr2.forEach(x => {
            sum += x;
        });
    document.getElementById("q7").innerHTML  = ("The sum of the array is: " + sum);
}

// 8. Given an array of integers in which all integers appear more than once except for 1, find the integer that only appears once. For example, given the array { 2, 4, 5, 5, 8, 5, 2, 1, 8, 1 }, the function should return the number 4.

const arr5 = [2, 4, 5, 5, 8, 5, 2, 1, 8, 1];
 arr5.sort(function(x,y)  
        {  
            return x-y;  
        });

const firstNonDuplicate = arr => {
    
   let appeared = false;
   //console.log(arr); 
   for(let i = 0; i < arr.length; i++){
      if(appeared){
         if(arr[i+1] !== arr[i]){
            appeared = false;
         };
      }else{
         if(arr[i+1] === arr[i]){
            appeared = true;
            continue;
         };
         return arr[i];
      };
   };
   return false;
};

function appOnce(){
    q8.style.color = "red";
        document.getElementById("q8").innerHTML  = "The number that only appear once is: " +(firstNonDuplicate(arr5));
}

// 9. Write a JavaScript function that takes an array of integers and prints its maximum element.

function largest()
 {
    q9.style.color = "red";
    let arr4 = [10, 324, 45, 90, 2808];
    let n = arr4.length;
    arr4.sort(function(x,y)  
            {  
                return x-y;  
            });  
    document.getElementById("q9").innerHTML  = "The largest value is: " + arr4[n-1];//(largest(arr4, n));
}
// 10. Write a JavaScript function that determines if an input number is even or odd.
function evenOdd()
{
    q10.style.color = "red";
    const number2 = prompt("Enter a number: ");
    const result = (number2 % 2  == 0) ? "even" : "odd";
    document.getElementById("q10").innerHTML  = (`The number ${number2} is ${result}.`);
}

