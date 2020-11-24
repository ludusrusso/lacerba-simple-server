import express from 'express';

const app = express();

let cnt = 0;

app.get('/', (req, res) => {
  const minus = Number(req.query.minus);
  if (Number.isInteger(minus)) {
    cnt -= minus;
  } else {
    cnt += 1;
  }
  console.log(req.query);
  return res.send(`
    <h1> Ciao Lacerba </h1>
    <p> Questo è il nostro primo server!</p>
    <p> Numero di accessi: ${cnt} </p>
    `);
});

app.get('/greeting/:name', (req, res) => {
  console.log(req.params);
  const name: string = req.params.name;
  return res.send(`<h1> Ciao ${name} </h1> <p> Questa è la pagina greeting!</p>`);
});

app.get('/ciao', (req, res) => {
  return res.send('<h1> Ciao Lacerba </h1> <p> Questa è la pagina ciao!</p>');
});

app.get('*', (req, res) => {
  return res.status(404).send('<h1> 404 </h1> <p> Pagina non trovata!</p>');
});

app.listen(3000, () => {
  console.log('🚀 Server started ad http://localhost:3000');
});
