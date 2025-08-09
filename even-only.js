function evenNumber(num) {
    let evenarray = [];
    for (const element of num) {
        if (element % 2 === 0) {
            evenarray.push(element);

        }

    }
    return evenarray;

}

const array = [15, 14, 12, 20, 45, 95];
const even = evenNumber(array);
console.log(even);


// sum of array---------
function evenSum(numbers) {
    let sumOfEven = 0;

    for (const number of numbers) {

        if (number % 2 === 0) {
            sumOfEven += number

        }

    }
    return sumOfEven;
}

const sum = evenSum(array);
console.log(sum);
