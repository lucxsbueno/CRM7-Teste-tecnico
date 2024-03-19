import { FindAccount } from "../usecases/find-account.js";

export class FindAccountController {
  async handle(req, res) {
    const response = await new FindAccount().execute(req.params);
    return res.status(200).send(response);
  }
}
