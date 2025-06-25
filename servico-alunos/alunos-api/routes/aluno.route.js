var express = require('express');
var router = express.Router();
var AlunoService = require('../services/aluno.service.js');

router.get(
    "/listar",
    (request, response, next) => {
        response.json(AlunoService.listar());
    }
);

router.post(
    "/criar",
    (request, response, next) => {
        const novoAluno = AlunoService.criar(request.body);
        response.status(201).json(novoAluno); 
    }
);

router.put(
    "/editar/:nome",
    (request, response, next) => {
        const nomeAluno = request.params.nome;
        const alunoAtualizado = AlunoService.editar(nomeAluno, request.body);
        if (alunoAtualizado) {
            response.json(alunoAtualizado);
        } else {
            response.status(404).json({ message: "Aluno não encontrado." });
        }
    }
);

router.delete(
    "/apagar/:nome", 
    (request, response, next) => {
        const nomeAluno = request.params.nome;
        const apagado = AlunoService.apagar(nomeAluno);
        if (apagado) {
            response.status(200).json({ message: "Aluno apagado com sucesso." });
        } else {
            response.status(404).json({ message: "Aluno não encontrado." });
        }
    }
);

module.exports = router;