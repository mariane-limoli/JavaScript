function comparaNum(){
    
    let n1 = Number(prompt('Insira o primeiro valor: '));
    let n2 = Number(prompt('Insira o segundo valor: '));
    let soma = n1 + n2;
    let resultado='';

    if(!n1 || !n2) {
        alert('Por favor digite um número');
        comparaNum();
    }
    else {

        (n1==n2) ? resultado = `Os numeros ${n1} e ${n2} são iguais. ` : 
                   resultado = `Os números ${n1} e ${n2} são diferentes. `;

        (soma>10) ? resultado += `Sua soma é ${soma}, que é maior que 10 ` :
                    resultado += `Sua soma é ${soma}, que é menor que 10 `;

        (soma>20) ? resultado += `e é maior que 20.` :
                    resultado += `e é menor que 20.`;
        
        function novaOperacao() {

            let opcao = prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não: ');

            if(opcao == 1) {
                comparaNum();
            }
            else if(opcao==2) 
            {
               alert('Volte sempre!')
            }

            else {
              alert('Opção inválida, tente novamente.');
                novaOperacao();
            }
         
        }
        alert(resultado);
        novaOperacao();
    }
}

comparaNum();
