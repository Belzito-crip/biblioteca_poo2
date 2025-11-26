const BaseModel = require('./BaseModel');

class Emprestimo extends BaseModel {
  constructor({ id, idexemplar, idusuario, dataEmprestimo, dataDevolucao }) {
    super(id);
    this.idexemplar = idexemplar;
    this.idusuario = idusuario;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolucao = dataDevolucao || null;
  }

  marcarDevolvido(data = new Date()) {
    this.dataDevolucao = data.toISOString().substring(0, 10);
  }
}

module.exports = Emprestimo;
