class Repository {
  constructor(db, entity) {
    this._db = db;
    this._entity = entity;
  }

  getAll() {
    return this._db[this._entity].findAll();
  }

  get(id) {
    return this._db[this._entity].findOne({ where: { id } });
  }

  create(entity) {
    return this._db[this._entity].create(entity);
  }

  update(id, entity) {
    delete entity.createAt;
    delete entity.updateAt;
    return this._db[this._entity].update(entity, { where: { id } });
  }

  delete(id) {
    return this._db[this._entity].destroy({ where: { id } });
  }
}

module.exports = Repository;
