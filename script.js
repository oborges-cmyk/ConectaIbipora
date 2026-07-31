document.getElementById('talentForm').addEventListener('submit', async (e) => {
        e.preventDefault(); // Impede a página de recarregar

        // Captura os dados do formulário
        const dados = {
            nome: document.getElementById('nome').value,
            talento: document.getElementById('talento').value,
            contato: document.getElementById('contato').value
        };

        const divMensagem = document.getElementById('mensagem');

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('talentForm');
        const mensagem = document.getElementById('mensagem');

        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o recarregamento da página

            // Captura os valores dos campos
            const nome = document.getElementById('nome').value;
            const talento = document.getElementById('talento').value;
            const contato = document.getElementById('contato').value;

            // Valida os campos (opcional)
            if (!nome || !talento || !contato) {
                mensagem.textContent = 'Por favor, preencha todos os campos.';
                mensagem.style.color = 'red';
                return;
            }

            // Exibe uma mensagem de sucesso
            mensagem.textContent = `Obrigado, ${nome}! Seu talento foi cadastrado com sucesso.`;
            mensagem.style.color = 'green';

            // Limpa o formulário
            form.reset();
        });
    });

        try {
            // Envia os dados para a API Back-end (rodando localmente na porta 3000)
            const resposta = await fetch('http://localhost:3000/api/talentos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            });

            if (resposta.ok) {
                divMensagem.style.color = 'green';
                divMensagem.innerText = 'Talento cadastrado com sucesso!';
                document.getElementById('talentForm').reset();
            } else {
                throw new Error();
            }
        } catch (erro) {
            divMensagem.style.color = 'red';
            divMensagem.innerText = 'Erro ao conectar com o servidor.';
        }
    });