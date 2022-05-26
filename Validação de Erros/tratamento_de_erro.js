function tratamentoErros(array, num){

    try{
         if(!array && !num) throw new ReferenceError("Envie os parametros");

    if(typeof array !== 'object') throw TypeError("Array precisa do tipo object");

    if(typeof num !== 'number') throw TypeError("Array precisa do tipo number");

    if(array.length !== num) throw new RangeError("Tamanho inválido");

    return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("esse erro é um ReferenceError");
            console.log(e.message);
        }
        else if(e instanceof TypeError){
            console.log("esse erro é um TypeError");
            console.log(e.message);
        }
        else if(e instanceof RangeError){
            console.log("esse erro é um RangeError");
            console.log(e.message);
        }
        else{  console.log("Tipo de erro não esperado: " + e)};

        }
    }
   

console.log(tratamentoErros());