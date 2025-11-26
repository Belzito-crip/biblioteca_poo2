const BaseModel = require('./BaseModel');

class Usuario extends BaseModel {
  constructor({ id, nome, telefone, email, tipoUser }) {
    super(id);
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.tipoUser = tipoUser;
  }
}

module.exports = Usuario;
