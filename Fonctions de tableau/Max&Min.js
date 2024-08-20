

function Maxtable(table){
    let min=0;
    let max=0;
    min= Math.min(...table);
    max= Math.max(...table);
    return [min,max]

}
console.log(Maxtable([2,3,5,4,9,50]))