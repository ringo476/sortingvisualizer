export default function QuickSort(arr, low, high){
    const animation=[];
    animation.push([9,10])
    quickSort(arr,low,high,animation);
    return animation;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, low, high,animation) {
    if (low < high) {
        let pi;

        let pivot = arr[high];
        let i = (low - 1);
 
        for (let j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                animation.push([j,high]);
                animation.push([j,high]);
                animation.push([j,i]);
                swap(arr, i, j);
            }
        }
        animation.push([i+1,high]);
        animation.push([i+1,high]);
        animation.push([i+1,high]);
        animation.push([9,10]);
        swap(arr, i + 1, high);
        pi=i+1;
        // quickSort(arr, low, pi - 1,animation);
        // quickSort(arr, pi + 1, high,animation);
    }
}