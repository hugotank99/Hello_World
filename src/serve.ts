//

import * as express from 'express';

const men = express();
const port = 1412;

men.get('/',(request , response) => {
    response.send('Hello World!');
});

men.get('/Gen',(request , response) => {
    response.send('****BSMs**** <br><br> ****Mentalidades**** <br> Persistência <br> Responsabilidade Pessoal <br> Orientação ao Detalhe <br> Mentalidade de Crescimento <br><br> ****Habilidades**** <br> Trabalho em Equipe <br> Atenção aos Detalhes <br> Proatividade <br> Comunicação');
});

men.get('/Obj',(request , response)=> {
    response.send('Aprendemos Banco de dados <br><br> MySQL WorkBench <br><br> Comandos JOIN <br><br> também fizemos tabelas para o projeto intregador');
});


men.listen(port, () => {
    console.log(`o servido esta rodando ${port}`);
    
});