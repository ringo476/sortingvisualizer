function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
function partition(arr, low, high,animations) {
 
    let pivot = arr[high];
 
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            animations.push([i,j]);
            animations.push([i,j]);
            animations.push([i,j]);
            swap(arr, i, j);
        }
    }
    animations.push([i+1,high]);
    animations.push([i+1,high]);
    animations.push([i+1,high]);
    swap(arr, i + 1, high);
    return (i + 1);
}

function quickSort(arr, low, high,animations) {
    if (low < high) {

        let pi = partition(arr, low, high,animations);

        quickSort(arr, low, pi - 1,animations);
        quickSort(arr, pi + 1, high,animations);
    }
}
export default function QuickSort(arr, low, high){
    const animations=[]
    quickSort(arr, low, high,animations)
    return animations;
}