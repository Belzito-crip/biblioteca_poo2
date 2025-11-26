const BaseModel = require('./BaseModel');

class Exemplar extends BaseModel {
  constructor({ id, idexemplar, codigoExemplar, status }) {
    super(id);
    this.idexemplar = idexemplar;
    this.codigoExemplar = codigoExemplar;
    this.status = status; // disponivel, emprestado, reservado
  }
}

module.exports = Exemplar;
