function verificaPalindromo(string){

    if(!string) return 'string inexistente'; //veirifca se a string existe e sai da função

    return string.split("").reverse().join("") === string;
    //join = junta todos os caracteres do array em uma string
}

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo('maria'));

//solução 2

function verificaPalindromo2(string){
    if(!string) return "string inexistente";

    for(let i=0; i<string.length/2; i++){
        if(string[i] !== string[string.length-1 -i] ){
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2("ovo"));