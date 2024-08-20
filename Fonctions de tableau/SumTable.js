function sumtable(table){
    let= sum=0;
    for (let i=0; i<table.length; i++){
        sum+=table[i];
    }
    return sum
}

console.log(sumtable([1,2,3,4,5]))