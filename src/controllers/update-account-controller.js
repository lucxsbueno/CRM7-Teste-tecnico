import { UpdateAccount } from "../usecases/update-account.js";

export class UpdateAccountController {
  async handle(req, res) {
    const { id } = req.params;
    const { nome, cnpj } = req.body;
    const data = { id, nome, cnpj };

    const response = await new UpdateAccount().execute(data);
    return res.status(200).send(response);
  }
}
