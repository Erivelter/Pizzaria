import express, { Request, Response } from 'express';
import prisma from './providers/prisma.provider';

const app = express();

// Middleware para analisar o corpo da solicitação como JSON
app.use(express.json());

// Rota para buscar um funcionário
app.get('/funcionario', async (req: Request, res: Response) => {
    try {
        const funcionario = await prisma.funcionario.findUnique({
            where: {
                email: 'elsa@prisma.io',
            },
        });
        
        res.json(funcionario);
    } catch (error) {
        console.error('Erro ao encontrar funcionário:', error);
        res.status(500).json({ error: 'Erro ao encontrar funcionário' });
    }
});

// Rota para criar um novo usuário
app.post('/create', async(req: Request, res: Response) => {
    const { name, email, senha, tipo } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                senha,
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

app.listen(3000, () => {
    console.log('Conexão bem-sucedida na porta 3000');
});
