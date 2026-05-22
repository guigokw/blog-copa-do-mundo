const sidebar = document.getElementById('sidebar'); /* seleciona o elemento HTML com o ID 'sidebar' e o armazena na variável 'sidebar', permitindo que o JavaScript manipule esse elemento para abrir e fechar a barra lateral, melhorando a interatividade e a usabilidade do site, especialmente em dispositivos móveis onde o espaço é limitado e um layout claro e organizado é necessário para melhorar a experiência do usuário */

const openBtn = document.getElementById('open-btn'); /* seleciona o elemento HTML com o ID 'open-btn' e o armazena na variável 'openBtn', permitindo que o JavaScript manipule esse elemento para abrir a barra lateral quando o botão for clicado, melhorando a interatividade e a usabilidade do site, especialmente em dispositivos móveis onde o espaço é limitado e um layout claro e organizado é necessário para melhorar a experiência do usuário */

const closeBtn = document.getElementById('close-btn'); /* seleciona o elemento HTML com o ID 'close-btn' e o armazena na variável 'closeBtn', permitindo que o JavaScript manipule esse elemento para fechar a barra lateral quando o botão for clicado, melhorando a interatividade e a usabilidade do site, especialmente em dispositivos móveis onde o espaço é limitado e um layout claro e organizado é necessário para melhorar a experiência do usuário */

const botoesVoltar = document.querySelectorAll('.volr-ini'); /* seleciona todos os elementos HTML com a classe 'volr-ini' e os armazena na variável 'botoesVoltar' como uma NodeList, permitindo que o JavaScript manipule esses elementos para adicionar um evento de clique que leva o usuário de volta ao topo da página, melhorando a interatividade e a usabilidade do site, especialmente em dispositivos móveis onde o espaço é limitado e um layout claro e organizado é necessário para melhorar a experiência do usuário */

const botaoContato = document.querySelectorAll('.bot-con'); /* seleciona todos os elementos HTML com a classe 'bot-con' e os armazena na variável 'botaoContato' como uma NodeList, permitindo que o JavaScript manipule esses elementos para adicionar um evento de clique que redireciona o usuário para a página de contato, melhorando a interatividade e a usabilidade do site, especialmente em dispositivos móveis onde o espaço é limitado e um layout claro e organizado é necessário para melhorar a experiência do usuário */

        openBtn.addEventListener('click', () => { /* adiciona um evento de clique ao elemento 'openBtn' que, quando acionado, executa a função anônima que adiciona a classe 'open' ao elemento 'sidebar', permitindo que a barra lateral seja exibida para o usuário, melhorando a interatividade e a usabilidade do site, especialmente em dispositivos móveis onde o espaço é limitado e um layout claro e organizado é necessário para melhorar a experiência do usuário */
            sidebar.classList.add('open');
        });

        closeBtn.addEventListener('click', () => { /* adiciona um evento de clique ao elemento 'closeBtn' que, quando acionado, executa a função anônima que remove a classe 'open' do elemento 'sidebar', permitindo que a barra lateral seja ocultada para o usuário, melhorando a interatividade e a usabilidade do site, especialmente em dispositivos móveis onde o espaço é limitado e um layout claro e organizado é necessário para melhorar a experiência do usuário */
            sidebar.classList.remove('open');
        });

        botoesVoltar.forEach((botao) => { /* itera sobre cada elemento na NodeList 'botoesVoltar' usando o método forEach, permitindo que o JavaScript adicione um evento de clique a cada botão que, quando acionado, executa a função anônima que rola a página para o topo de forma suave, melhorando a interatividade e a usabilidade do site, especialmente em dispositivos móveis onde o espaço é limitado e um layout claro e organizado é necessário para melhorar a experiência do usuário */
            botao.addEventListener('click', () => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        });

        botaoContato.forEach((botao) => { /* itera sobre cada elemento na NodeList 'botaoContato' usando o método forEach, permitindo que o JavaScript adicione um evento de clique a cada botão que, quando acionado, executa a função anônima que redireciona o usuário para a página de contato, melhorando a interatividade e a usabilidade do site, especialmente em dispositivos móveis onde o espaço é limitado e um layout claro e organizado é necessário para melhorar a experiência do usuário */
            botao.addEventListener('click', () => {
                window.location.href = 'contato.html';
            });
        });

        