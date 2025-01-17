import { AccountSchema } from "../schema/schema-accounts.js";

export class RepositoryAccount {
  async create(data) {
    return await AccountSchema.create(data);
  }

  async delete(id) {
    return await AccountSchema.deleteOne({ _id: id });
  }

  async fetch(id) {
    return await AccountSchema.findOne({ _id: id });
  }

  async update({ id, nome, cnpj }) {
    return await AccountSchema.updateOne({ _id: id }, { nome, cnpj });
  }

  async findAll() {
    return await AccountSchema.find();
  }
}
