var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});
router.get('/productos', function(req, res, next) {
  res.render('productos/productos');
});
router.get('/compras', function(req, res, next) {
  res.render('inndex');
});
router.get('/nosotros', function(req, res, next) {
  res.render('index', { title: 'Nosotros', condition: true, anyArray: [1,2,3] });
});
router.get('/usuarios', function(req, res, next) {
  res.render('usuarios/ingresar');
});

router.get('/usuarios/registro', function(req, res, next) {
  res.render('usuarios/registro');
});

router.get('/usuarios/validar', function(req, res, next) {
  res.render('usuarios/validacion');
});


router.post('/usuario/submit', function(req, res, next) {
  res.redirect('/usuario/registro');
});

module.exports = router;
