console.log("Mostrar números pares\n\n");

let evenNum =[];

function retEvenValues(array){
    for(let i=0; i<array.length;i++)
        if(array[i]%2===0){
            evenNum.push(array[i]);
        }
        else{
            console.log(`${array[i]} não é par`);
        }
    console.log(evenNum);
}

let array = [1, 2, 4, 5, 6, 7, 8];

retEvenValues(array);

console.log('Os número pares são: '+ evenNum);