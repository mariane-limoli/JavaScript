function trocaPar(array){
    if(!array || !array.length) return -1;

    for(let i=0; i<array.length; i++){
        if(array[i] === 0){
        console.log("Já é zero");
        }
        else if( array[i]%2 ===0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[1] = 0;
        }
        
    }
    return array;
}

let array = [0];
console.log(trocaPar(undefined));
