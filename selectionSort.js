function findSmallest(arr){
    var smallest=arr[0]
    var smallestIndex
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<smallest){
            smallest=arr[i]
            smallestIndex=i
        }
    }
    return smallestIndex
}
function selectionSort(arr){
    var index
    var sortedArray=new Array()
    var lenghtarr=arr.length
    for (let i = 0; i < lenghtarr; i++) {
        index=findSmallest(arr)
        sortedArray.push(arr.splice(index,1))
    }
    return sortedArray
}
