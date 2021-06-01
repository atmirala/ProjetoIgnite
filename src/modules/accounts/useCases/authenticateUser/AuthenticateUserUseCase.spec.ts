import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { LocalUsersRepository } from "../../repositories/local/LocalUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let localUsersRepository: LocalUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    localUsersRepository = new LocalUsersRepository();
    authenticateUserUseCase = new AuthenticateUserUseCase(localUsersRepository);
    createUserUseCase = new CreateUserUseCase(localUsersRepository);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "00456",
      email: "user@email.com",
      password: "1234",
      name: "User Test",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });
});
