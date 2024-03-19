import { RepositoryAccount } from "../infrastructure/db/repository/repository-accounts.js";

export class UpdateAccount {
  async execute(data) {
    const response = await new RepositoryAccount().update(data);
    return response;
  }
}
