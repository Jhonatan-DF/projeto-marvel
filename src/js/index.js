/*
OBJETIVO 1: quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

- colocar a classe selecionado no personagem que o usuário passar o mouse em cima para adicionar a animação nele.

- retirar a classe selecionado do personagem que estiver selecionado.

OBJETIVO 2: quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.

- alterar a imagem do jogador 1.

- alterar o nome do jogador 2.

- pegar o personagem que o usuário passar o mouse em cima para adicionar as informações nele.

- alterar a imagem, o nome e a descrição do personagem grande.

*/

const personagens = document.querySelectorAll('.personagem');


personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'ultron'){
            return;
        };

        const personagemSelecionado = document.querySelector('.selecionado')

        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')



        //         OBJETIVO 2: quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.

        // - alterar a imagem do jogador 1.

        // - alterar o nome do jogador 2.

        // - pegar o personagem que o usuário passar o mouse em cima para adicionar as informações nele.

        // - alterar a imagem, o nome e a descrição do personagem grande.


        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/images/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
    });
});

