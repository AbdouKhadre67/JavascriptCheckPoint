function fact(n){
    if (n===0){
        return 1;
    }

    let f =1;
    for(let i=1; i<n+1; i++){
        f*=i;
    }
    return f;
}

console.log(fact(5))