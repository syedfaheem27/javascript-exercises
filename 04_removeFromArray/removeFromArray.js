const removeFromArray = function(arr,...arr_new) {
    for(let i=0;i<arr_new.length;i++){
        let j=0;
        for(;j<arr.length;j++){
            if(arr[j]===arr_new[i]){
                arr.splice(j,1);
                break;
            }
        }

    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
