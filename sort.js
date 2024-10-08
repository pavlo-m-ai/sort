function generateUniqueRandomArray(minLength, maxLength, minValue, maxValue) {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < length) {
        const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        uniqueNumbers.add(randomNum);
    }

    return Array.from(uniqueNumbers);
}

function bubbleSort(array) {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

const randomArray = generateUniqueRandomArray(4, 8, 1, 100);
const sortedArray = bubbleSort([...randomArray]);

console.log('Випадковий масив:', randomArray);
console.log('Сортований масив:', sortedArray);