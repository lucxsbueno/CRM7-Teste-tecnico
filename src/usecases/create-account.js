import { RepositoryAccount } from "../infrastructure/db/repository/repository-accounts.js";

export class CreateAccount {
  async execute(data) {
    const response = await new RepositoryAccount().create(data);
    return response;
  }
}
