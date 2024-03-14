function nhan(para1 , ...theArgs){
    return theArgs.map(x=>para1*x);
}
console.log(nhan(2,1,2,3));