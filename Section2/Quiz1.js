//Using const -  Appending Negative numbers 

const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    numbers.forEach(function(number){
        number < 0 ? negativeNumbers.push(number):null
    });
}