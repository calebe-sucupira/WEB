const AlunoModel = require('../models/aluno.model.js');
const alunos = require('../data/alunos.js');

class AlunoService {
    static listar() {
        return alunos;
    }

    static criar(alunoData) {
        const novoAluno = new AlunoModel(alunoData.nome, alunoData.curso, alunoData.ira);
        alunos.push(novoAluno);
        return novoAluno;
    }

    static editar(nomeAluno, newData) {
        const alunoIndex = alunos.findIndex(aluno => aluno.nome === nomeAluno);
        if (alunoIndex !== -1) {
            alunos[alunoIndex].nome = newData.nome || alunos[alunoIndex].nome;
            alunos[alunoIndex].curso = newData.curso || alunos[alunoIndex].curso;
            alunos[alunoIndex].ira = newData.ira !== undefined ? newData.ira : alunos[alunoIndex].ira;
            return alunos[alunoIndex];
        }
        return null; 
    }

    static apagar(nomeAluno) {
        const initialLength = alunos.length;
        const alunosFiltrados = alunos.filter(aluno => aluno.nome !== nomeAluno);
        if (alunosFiltrados.length < initialLength) {
            alunos.splice(0, alunos.length, ...alunosFiltrados); 
            return true; 
        }
        return false;
    }
}

module.exports = AlunoService;