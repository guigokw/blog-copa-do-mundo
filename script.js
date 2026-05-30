const sidebar = document.getElementById('sidebar'); /* refere-se ao elemento da barra lateral usado para abrir/fechar */

const openBtn = document.getElementById('open-btn'); /* botão que abre a sidebar */

const closeBtn = document.getElementById('close-btn'); /* botão que fecha a sidebar */

const botoesVoltar = document.querySelectorAll('.volr-ini'); /* botões que retornam ao topo da página */

const botaoContato = document.querySelectorAll('.bot-con'); /* botões que levam para a página de contato */

openBtn.addEventListener('click', () => { /* ao clicar, adiciona a classe 'open' para mostrar a sidebar */
    sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => { /* ao clicar, remove a classe 'open' para esconder a sidebar */
    sidebar.classList.remove('open');
});

botoesVoltar.forEach((botao) => { /* adiciona a ação de rolar ao topo com comportamento suave */
    botao.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

botaoContato.forEach((botao) => { /* redireciona para 'contato.html' ao clicar */
    botao.addEventListener('click', () => {
        window.location.href = 'contato.html';
    });
});

        