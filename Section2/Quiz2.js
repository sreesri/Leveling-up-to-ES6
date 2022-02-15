// Using let - Finding the largest string

let largestString;

function findLargestString(strings) {
    largestString="";
    strings.forEach(function(string){
        string.length > largestString.length ? largestString=string : null
    })
}