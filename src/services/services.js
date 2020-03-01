const { NotFoundError } = require('../exceptions');

class Service {
  constructor(EntityRepository) {
    this._entityRepository = EntityRepository;
  }

  async getAll() {
    const entities = await this._entityRepository.getAll();
    if (!entities) throw new NotFoundError('not found');
    return entities;
  }

  async get(id) {
    const entity = await this._entityRepository.get(id);
    if (!entity) throw new NotFoundError('not found');
    return entity;
  }

  async create(entity) {
    const createEntity = await this._entityRepository.create(entity);
  }

  async update(id, entity) {
    const entityExist = await this._entityRepository.get(id);
    if (!entityExist) throw new NotFoundError('not found');
    const updatedEntity = await this._entityRepository.update(id, entity);
  }

  async delete(id) {
    const entityExist = await this._entityRepository.get(id);
    if (!entityExist) throw new NotFoundError('not found');
    const deletedEntity = await this._entityRepository.delete(id);
    return deletedEntity;
  }
}

module.exports = Service;
