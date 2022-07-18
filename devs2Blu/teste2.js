function ConvertToBinaryArray(str) {
    let result;

    let numbers = String(str).split("").map((str) => {
        return Number(str);
    });

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (num == "1" || num == "0") {
            result = true;
        } else {
            result = false;
            break;
        }
    }

    if (result == true) {
        return numbers;
    } else {
        return null;
    }

}

function CreateReversedArray(str) {
    return ConvertToBinaryArray(str).reverse();
}

function ConverterToDecimalForm(str) {
    if (ConvertToBinaryArray(str) != null) {
        let numbers = CreateReversedArray(str);
        let result = 0;
        let base = 2;

        for (let i = 0; i < numbers.length; i++) {
            let num = numbers[i];
            let calc = (Math.pow(base, i)) * num;

            result = result + calc;
        }

        return result;
    } else {
        return ("Error: invalid number, is not binary type.")
    }

}

function MathChallenge(str) {

    return ConverterToDecimalForm(str);

}
// keep this function call here 
console.log(MathChallenge("10511"));