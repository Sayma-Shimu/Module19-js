function arraySum(numbers) {
    // console.log(numbers);

    let sum = 0;

    for (const element of numbers) {
        // console.log(element);

        sum += element
    }
    return sum;

}

const array = [20, 53, 42, 15, 67];
const total = arraySum(array)
console.log(total);
