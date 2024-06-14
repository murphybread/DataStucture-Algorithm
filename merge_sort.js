function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    console.log(`left: ${left} right: ${right}`)
    while (leftIndex < left.length && rightIndex < right.length) {

        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }

    }

    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));

}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));

}

// 테스트 케이스 1: 일반적인 배열
let array1 = [
    38,
    27,
    43,
    3,
    9,
    82,
    10
];
console.log("Original:", array1);
console.log("Sorted:", mergeSort(array1));
// Expected output: [3, 9, 10, 27, 38, 43, 82]