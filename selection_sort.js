function selection_sort(arr) {

    let copy = [...arr]

    for (let i = 0; i < copy.length - 1; i++) {
        let minIndex = i;

        console.log(`${i}회차 회전`)
        for (let j = i + 1; j < copy.length; j++) {

            if (copy[j] < copy[minIndex]) {
                minIndex = j

            }
        }

        // 최소값을 현재 위치의 값과 교환
        if (minIndex !== i) {
            [
                copy[i], copy[minIndex]
            ] = [
                copy[minIndex], copy[i]
            ];
        }
        console.log(copy)

    }

    return copy;
}

// 테스트 예제
let array1 = [64, 25, 12, 22, 11];
console.log("Original:", array1);
console.log("Sorted:", selection_sort(array1));
// Expected output: [11, 12, 22, 25, 64]