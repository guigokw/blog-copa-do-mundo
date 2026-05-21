const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const botoesVoltar = document.querySelectorAll('.volr-ini');
const botaoContato = document.querySelectorAll('.bot-con');

        openBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
        });

        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });

        botoesVoltar.forEach((botao) => {
            botao.addEventListener('click', () => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        });

        botaoContato.forEach((botao) => {
            botao.addEventListener('click', () => {
                window.location.href = 'contato.html';
            });
        });

        