const express = require('express');
const apiRouter = express.Router();
const terapeuta = require('models/terapeutamodel');
const usuario = require('model/usuariomodel');

apiRouter.get('/api/user/:id', (req, res) =>{
    
});

module.exports = { apiRouter };