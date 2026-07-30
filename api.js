const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite que o HTML acesse a API
app.use(express.json()); // Permite ler dados em formato JSON

// CONFIGURAÇÃO DA CONEXÃO COM O MYSQL
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // Seu usuário do MySQL (padrão é root)
    password: '123456789',  // A senha que você criou ao instalar o MySQL
    database: 'banco_talentos'
});

conexao.connect(erro => {
    if (erro) {
        console.error('Erro ao conectar no MySQL: ' + erro.stack);
        return;
    }
    console.log('Conectado com sucesso ao Banco de Dados!');
});

// ROTA DA API QUE RECEBE O CADASTRO DO SITE
app.post('/api/talentos', (req, res) => {
    const { nome, talento, contato } = req.body;
    
    const query = 'INSERT INTO participantes (nome, talento, contato) VALUES (?, ?, ?)';
    
    conexao.query(query, [nome, talento, contato], (erro, resultado) => {
        if (erro) {
            return res.status(500).send('Erro ao salvar no banco.');
        }
        res.status(201).send('Cadastrado com sucesso!');
    });
});

// Inicializa o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
