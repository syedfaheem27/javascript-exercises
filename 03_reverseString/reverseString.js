const reverseString = function(str) {
    const str_1=str.split("");
    const str_2=[];
    for(let i=0;i<str_1.length;i++) {
        str_2[i]=str_1[str_1.length-1-i];
    }
    const str_new=str_2.join("");
    return str_new;

};

// Do not edit below this line
module.exports = reverseString;
