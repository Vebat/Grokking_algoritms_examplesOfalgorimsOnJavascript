
function binarysearch(array, item) {
var mid, guess
let low=0
let high=array.length-1
while (low<=high) {
    mid=(low+high)/2
    guess=array[mid]
    if(guess==item ) {
        return mid+1
    }
    if(guess>item) {
        high=mid-1
    } else {
        low=mid+1
    }
}
    return null
}


