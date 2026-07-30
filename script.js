document.getElementById('talentForm').addEventListener('submit', async (e) => {
        e.preventDefault(); // Impede a página de recarregar

        // Captura os dados do formulário
        const dados = {
            nome: document.getElementById('nome').value,
            talento: document.getElementById('talento').value,
            contato: document.getElementById('contato').value
        };

        const divMensagem = document.getElementById('mensagem');

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