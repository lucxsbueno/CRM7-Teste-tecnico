import { RepositoryAccount } from "../infrastructure/db/repository/repository-accounts.js";

export class FindAccount {
  async execute(data) {
    const response = await new RepositoryAccount().fetch(data.id);
    return response;
  }
}
