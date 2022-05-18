let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
    if(count<=5){
        CURRENT_NUMBER.innerHTML = count;
    }	
}

function decrement() {
	count--;
    CURRENT_NUMBER.innerHTML = count;	
}

function color(){
    if(count<0){
        CURRENT_NUMBER.style.color = 'red';
    }
    else{
        CURRENT_NUMBER.style.color = 'black';
    }
}
