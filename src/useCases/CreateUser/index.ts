import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const postgresUserRepository = new PostgresUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserController, createUserUseCase }
