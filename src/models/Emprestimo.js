const BaseModel = require('./BaseModel');

class Emprestimo extends BaseModel {
  constructor({ id, idexemplar, idusuario, dataEmprestimo, dataDevolvido }) {
    super(id);
    this.idexemplar = idexemplar;
    this.idusuario = idusuario;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolvido = dataDevolvido || null;
  }

  marcarDevolvido(data = new Date()) {
    this.dataDevolvido = data.toISOString().substring(0, 10);
  }
}

module.exports = Emprestimo;
