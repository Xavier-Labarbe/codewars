export default function descendingOrder(n){
    return parseInt((n+'') //parse the Array
        .split('')//split all the numbers
        .sort()// sort them
        .reverse()//reverse the sort to get the good order
        .join(''))//joining all the numbers together again
}