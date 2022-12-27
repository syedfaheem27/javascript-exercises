const sumAll = function(n1,n2) {
    if(typeof n1 === 'number' && typeof n2 === 'number'){
    if(n1>0&&n2>0){
        let n=0;
        if(n2>n1){
            for(;n1<=n2;n1++){
                n+=n1;
            }
            return n;
        }
        else {
            for(;n2<=n1;n2++){
                n+=n2;
            }
            return n;
        }
    }
    else return 'ERROR';
}
    else return 'ERROR';
    

};

// Do not edit below this line
module.exports = sumAll;
