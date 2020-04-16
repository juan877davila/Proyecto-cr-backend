var express = require('express');
var router = express.Router();

const Articulo = require('../models/articulos')

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
router.patch('/Articulos/:id', async (req, res) =>{
  console.log(req.query.operacion);
  const articulo = await Articulo.findById(req.params.id);
  let cantidad = Number(articulo.cantidad);
  if(req.query.operacion === "ingreso"){    
    console.log(req.query.cantidad);
    cantidad += Number(req.query.cantidad);
    Articulo.findByIdAndUpdate(req.params.id, { cantidad }, { new: true })
    .then(() => res.status(200).json(Articulo))
    .catch(err => res.status(404).json(err))
  } else{
    console.log(req.query.cantidad);
    cantidad -= req.query.cantidad;
    Articulo.findByIdAndUpdate(req.params.id, { cantidad }, { new: true })
    .then((Articulo) => res.status(200).json(Articulo))
    .catch(err => res.status(404).json(err))
  }
});

router.delete('/Articulos/:id', (req, res) =>{
  Articulo.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json('Borrado exitoso'))
    .catch(err => res.status(404).json(err))
});

module.exports = router;