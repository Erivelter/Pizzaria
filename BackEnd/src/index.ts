import express, { Request, Response } from 'express';
import prisma from './providers/prisma.provider';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const saltRounds = 10; // Número de rounds para a função de hash bcrypt

app.use(express.json());

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erro interno do servidor');
});
app.post('/login', async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    try {
        // Verifique se o usuário com o email fornecido existe no banco de dados
        const user = await prisma.FuncionarioCliente.findFirst({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Compare a senha fornecida com a senha armazenada no banco de dados
        const senhaCorreta = await bcrypt.compare(senha, user.senha);
        
        console.log(senhaCorreta)
        console.log(senha)
        console.log(user.senha)

        if (!senhaCorreta) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Se as credenciais estiverem corretas, crie um token JWT
        const token = jwt.sign({ userId: user.id, tipo: user.tipo }, 'sua_chave_secreta');

        // Envie o token JWT como parte da resposta
        res.json({ token });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});
// Rota para criar um novo usuário (funcionário ou cliente)
app.post('/create', async (req: Request, res: Response) => {
    const { name, email, senha, tipo } = req.body;

    try {
        // Validar entrada
        if (!name || !email || !senha || !tipo) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        // Verificar se o tipo fornecido é válido (funcionário ou cliente)
        if (tipo !== 'funcionario' && tipo !== 'cliente') {
            return res.status(400).json({ error: 'Tipo inválido. Use "funcionario" ou "cliente".' });
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(senha, saltRounds);

        // Criar o usuário no banco de dados
        const newUser = await prisma.FuncionarioCliente.create({
            data: {
                name,
                email,
                senha: hashedPassword,
                tipo
            }
        });

        res.status(201).json({
            message: 'Usuário cadastrado com sucesso'
        });
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
});

// Rota para criar uma nova pizza no cardápio
app.post('/create_pizza', async (req, res) => {
    const { Nome, Foto, TextoChamativo, Ingredientes, Alergias, Price } = req.body;

    try {
        // Validar entrada (certifique-se de que todos os campos obrigatórios estão presentes)

        // Criar a pizza no banco de dados
        const newPizza = await prisma.Pizza.create({
            data: {
                Nome,
                Foto,
                TextoChamativo,
                Ingredientes,
                Alergias: Alergias.join(','), // Convertendo a lista de alergias em uma string separada por vírgula
                Price
            }
        });

        res.status(201).json({
            message: 'Pizza adicionada ao cardápio com sucesso'
        });
    } catch (error) {
        console.error('Erro ao adicionar pizza ao cardápio:', error);
        res.status(500).json({ error: 'Erro ao adicionar pizza ao cardápio' });
    }
});
app.put('/edit_pizza/:id', async (req, res) => {
    const { id } = req.params;
    const { Nome, Foto, TextoChamativo, Ingredientes, Alergias, Price } = req.body;

    try {
        // Verificar se a pizza com o ID fornecido existe

        // Atualizar os detalhes da pizza no banco de dados

        res.json({ message: 'Pizza atualizada com sucesso' });
    } catch (error) {
        console.error('Erro ao editar pizza:', error);
        res.status(500).json({ error: 'Erro ao editar pizza' });
    }
});
app.delete('/delete_pizza/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Verificar se a pizza com o ID fornecido existe

        // Excluir a pizza do banco de dados

        res.json({ message: 'Pizza excluída com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir pizza:', error);
        res.status(500).json({ error: 'Erro ao excluir pizza' });
    }
});
app.get('/menu', async (req, res) => {
    try {
        const pizzas = await prisma.Pizza.findMany();
        res.json(pizzas);
    } catch (error) {
        console.error('Erro ao obter o cardápio:', error);
        res.status(500).json({ error: 'Erro ao obter o cardápio' });
    }
});


app.listen(3000, () => {
    console.log('Conexão bem-sucedida na porta 3000');
});
