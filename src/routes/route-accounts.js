import express from "express";

import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";
import { CreateAccountController } from "../controllers/create-account-controller.js";

const router = express.Router();

router.get("/accounts", new ConsultAllAccountsController().handle);
router.post("/accounts", new CreateAccountController().handle);

export default router;
