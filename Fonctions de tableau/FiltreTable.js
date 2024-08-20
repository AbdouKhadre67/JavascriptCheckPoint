function FiltreTable(table){
    let paire= [];
    let impaire= [];
    for (let i =0; i< table.length; i++){
        if (table[i]%2===0){
            paire.push(table[i])
        }else{
            impaire.push(table[i])
        }
    }
    return [paire,impaire]
}

console.log(FiltreTable([1,2,63,7,4,9,74]))