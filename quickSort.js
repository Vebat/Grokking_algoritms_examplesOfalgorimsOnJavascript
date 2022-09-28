function quickSort(arr){

    var reference
    var referenceIndex
    var lessReference=[]
    var moreReference=[]
    var sortArr=[]

    if(arr.length<2){
        return arr
    }else if(arr.length==2){
        return sortArrWithTwo(arr)
    }else{
        referenceIndex=Math.floor(arr.length/2)-1
        reference=arr[referenceIndex]
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]<reference){
                lessReference.push(arr[i])
            }
            if(arr[i]>reference) {
                moreReference.push(arr[i])
            }
        }
        lessReference=quickSort(lessReference)
        moreReference=quickSort(moreReference)
        lessReference.push(reference)
        sortArr=[...lessReference, ...moreReference]
        return sortArr
    }
    
}
function sortArrWithTwo(arr){
    var sortArr
    if(arr[0]>arr[1]){
        return arr
    }else{
        return sortArr=[arr[1], arr[0]]
    }
}

