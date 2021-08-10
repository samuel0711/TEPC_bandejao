var express = require('express');
var router = express.Router();

let cadastros = [
  {
    id: 0,
    nome: 'Samuel',
    matricula: 2016780469
  },
  {
    id: 1,
    nome: 'Ariane',
    matricula: 2016750666
  }
]

let count = 2;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bandejando',
   subtitle: 'Sistema para alocação de pessoas no bandejão da UFRRJ-IM' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Bandejando',
  subtitle: 'Sistema para alocação de pessoas no bandejão da UFRRJ-IM' });
});

router.post('/cadastro', function(req, res, next) {
  const name = req.body.nome;
  const matr = req.body.matricula;
  const cad = {
    id: count,
    nome: name,
    matricula: matr
  }

  cadastros.push(cad)

  count = count + 1;

  res.json(cadastros)
})

router.get('/cadastro/:id', function(req, res, next) {
  console.log(req.params.id)
  console.log(cadastros[req.params.id])
  res.json(cadastros[req.params.id]);
})

module.exports = router;
