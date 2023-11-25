const sumNumbers = (a) =>{
    let total = 0;
    if(a == null || a == ''){
        return total;
    } 
    for(let i = 0; i < a; i++){
        if(i % 3 == 0 || i % 5 == 0){
            total += i;
        }
    }
    return total;
}

modules.exports ={sumNumbers}