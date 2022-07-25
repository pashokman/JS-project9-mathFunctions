export const pow = (number1, number2) => {
    let result = 1;
    
    if (number1 === 0 && number2 === 0) {
        return 0;
    } else if (number2 === 1) {
        return number1;
    } else if (number2 === 0) {
        return 1;
    } else if (number2 < 1) {
        while (number2 < 0) {
            result *= number1;
            number2++;
        }

        return 1 / result;
    } else {
        return number1 * pow(number1, number2 - 1);
    }
}

export const sum = (number1, number2) => number1 + number2;

export const sub = (number1, number2) => number1 - number2;

const square = (number, i, j) => {
    let middle = (i + j) / 2;
    let pow2 = middle * middle;

    if ((pow2 === number) || (Math.abs(pow2 - number) < 0.00001)) {
        return middle;
    } else if (pow2 < number) {
        return square(number, middle, j);
    } else {
        return square(number, i, middle);
    }
}

export const sqrt = (number) => {
    let i = 1;
    const found = false;

    if (number <= 0) {
         return 'Error';
    } else {
        while (!found) {
            if (i * i === number) {
                return i;
            } else if (i * i > number) {
                let result = square(number, i - 1, i);
                return result;
            }
            i++;
        }
    }

}

export const multi = (number1, number2) => number1 * number2;

const cube = (number) => number * number * number;

export default cube;