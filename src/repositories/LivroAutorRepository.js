class LivroAutorRepository {
  constructor(pool) {
    this.pool = pool;
  }

  async list() {
    const [rows] = await this.pool.query(`
      SELECT la.idlivro, la.idautor, l.titulo AS titulo, a.nomeAutor AS nomeAutor
      FROM livro_autor la
      LEFT JOIN livro l ON l.idlivro = la.idlivro
      LEFT JOIN autor a ON a.idautor = la.idautor
      ORDER BY l.titulo, a.nomeAutor
    `);
    return rows;
  }

  async create({ idlivro, idautor }) {
    if (!idlivro || !idautor) return null;
    await this.pool.execute('INSERT INTO livro_autor (idlivro, idautor) VALUES (?, ?)', [idlivro, idautor]);
    return this.findByIds(idlivro, idautor);
  }

  async findByIds(idlivro, idautor) {
    const [rows] = await this.pool.query(
      `SELECT la.idlivro, la.idautor, l.titulo AS titulo, a.nomeAutor AS nomeAutor
       FROM livro_autor la
       LEFT JOIN livro l ON l.idlivro = la.idlivro
       LEFT JOIN autor a ON a.idautor = la.idautor
       WHERE la.idlivro = ? AND la.idautor = ?`,
      [idlivro, idautor]
    );
    return rows[0] || null;
  }

  async delete(idlivro, idautor) {
    const [result] = await this.pool.execute('DELETE FROM livro_autor WHERE idlivro = ? AND idautor = ?', [idlivro, idautor]);
    return result.affectedRows > 0;
  }
}

module.exports = LivroAutorRepository;
