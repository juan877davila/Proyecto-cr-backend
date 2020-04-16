var express = require('express');
var router = express.Router();

const Articulo = require('../models/Articulos')

/**
 * CRUD Articulos
 */

router.post('/Articulos', (req, res) =>{
  Articulo.create(req.body)
    .then(Articulo => res.status(201).json(Articulo))
    .catch(err => res.status(400).json(err));
});

router.get('/Articulos', (req, res) => {
  Articulo.find()
    .then(Articulos => {
      if (Articulos.lenth === 0) res.status(200).json({ mensaje: 'No hay articulos' });
      res.status(200).json(Articulos);
    })
    .catch(err => res.status(400).json(err));
})

router.get('/Articulos/:id', (req, res) => {
  Articulo.findById(req.params.id)
    .then(Articulo => res.status(200).json(Articulo))
    .catch(err => res.status(404).json(err))
});

// Actualizar cantidades /id?operacion=ingreso&cantidad=#
router.patch('/Articulos/:id', (req, res) =>{
  if(req.query.operacion === ingreso){
    const articulo = await Articulo.findById(req.params.id);
    console.log(req.query.cantidad);
    articulo.cantidad += req.query.cantidad;
    Articulo.findByIdAndUpdate(req.params.id, { cantidad }, { new: true })
    .then(() => res.status(200).json(Articulo))
    .catch(err => res.status(404).json(err))
  } else{
    const articulo = await Articulo.findById(req.params.id);
    articulo.cantidad -= req.query.cantidad;
    Articulo.findByIdAndUpdate(req.params.id, { cantidad }, { new: true })
    .then(() => res.status(200).json(Articulo))
    .catch(err => res.status(404).json(err))
  }
});

router.delete('/Articulos/:id', (req, res) =>{
  Articulo.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(Articulo))
    .catch(err => res.status(404).json(err))
});

module.exports = router;