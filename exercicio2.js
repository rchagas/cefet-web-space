// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let i = 0;
let prev = document.getElementById('anterior');
let proximo = document.getElementById('proximo');

proximo.addEventListener('click', function(){
	i++;
	if(i == todasAsImagens.length)
    		i = 0;
	document.getElementById('slide').src = servidorDasImagens.concat(todasAsImagens[i]);
});

prev.addEventListener('click', function(){	
	i--;
	if(i < 0)
    		i = todasAsImagens.length-1;
	document.getElementById('slide').src = servidorDasImagens.concat(todasAsImagens[i]);
});
