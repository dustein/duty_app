const express = require('express');
const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  console.log('Acesso na raiz')
  res.json({rodando: "Rota RAIZ. AWS Server"})
});

app.get('/rota', (req, res) => {
  console.log('acesso na /rota')
  res.send('está na ROTA')
})

app.listen(3030, () => { console.log('Servidor AWS Rodando porta 3030') });

