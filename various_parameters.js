function evenSizedString(data) {
    const size = data.length;

    if (size % 2 === 0) {
        console.log('even sized');
        return true;
    }
    else {
        console.log('odd sized');
        return false;

    }
}

evenSizedString('Kishoreganj');
evenSizedString('Dist');


function doubleOrTriple(num, doubleKoro){
    if(doubleKoro === true){
        const result = num * 2;
        return result;
    }
    else{
        const result = num * 3;
        return result;
    }

}

const result = doubleOrTriple(5, true);
const result1 = doubleOrTriple(15, false);

console.log(result);
console.log(result1);
