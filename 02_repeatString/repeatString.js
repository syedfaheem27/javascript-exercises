const repeatString = function(str,num) {
    if(num>0){
    let str_1=str;
    for(let i=1;i<num;i++) {
        str_1+=str;
    }
    return str_1;}
    else if(num==0){
        return '';
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
