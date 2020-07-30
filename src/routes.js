import { createUserController } from "./useCases/CreateUser";

const { Router } = require("express");

const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

export { router }
