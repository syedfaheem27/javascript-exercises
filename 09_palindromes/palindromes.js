const palindromes = function (str) {
    let str_new=str.toUpperCase();
    let arr=str_new.split('');
    let len=arr.length;
    let result=true;
    for(let i=0;i<len;i++) {
        if(arr[i]===' '||arr[i]=='.'||arr[i]=='!'||arr[i]==','){
            arr.splice(i,1);
            i--;
        }
    }
    for(let i=0;i<arr.length;i++) {
        if(arr[i]!==arr[arr.length-i-1]){
            result=false;
            break;
        }
    }
    return result;

};

// Do not edit below this line
module.exports = palindromes;
