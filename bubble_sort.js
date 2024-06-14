function bubble_sort(arr){
    let copy = [...arr];


    for (let i = 0; i < arr.length-1 ; i++){

        console.log(`${i}회차 정렬 시작`);
        for (let j =0; j < arr.length-1-i;j++){

            if (copy[j] > copy[j+1]){
                [copy[j+1] ,copy[j]] = [copy[j], copy[j+1]];
                console.log(copy);
            }
        }
        console.log("-----------");

    }

    return copy;
}
let array1 = [5, 3, 8, 4, 2];
console.log("Original:", array1);
console.log("Sorted:", bubble_sort(array1));
// Expected output: [2, 3, 4, 5, 8]
