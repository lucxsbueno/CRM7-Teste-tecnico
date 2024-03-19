import { RepositoryAccount } from "../infrastructure/db/repository/repository-accounts.js";

export class DeleteAccount {
  async execute(data) {
    const response = await new RepositoryAccount().delete(data.id);
    return response;
  }
}
