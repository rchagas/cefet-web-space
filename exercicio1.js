// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let plusButton = document.getElementsByClassName('botao-expandir-retrair');

for (let button of plusButton){
	button.addEventListener('click', function(event){	
		if(event.target.parentNode.classList.contains('expandido')){
  			event.target.parentNode.classList.remove('expandido');
    			event.target.innerHTML = '+';
  		}else{
			event.target.parentNode.classList.add('expandido');
    			event.target.innerHTML = '-';
  		}});

}

