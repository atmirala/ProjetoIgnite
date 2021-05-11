import { UsersRepository } from "modules/accounts/repositories/implementatios/UsersRepository";
import { IUsersRepository } from "modules/accounts/repositories/IUsersRepository";
import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepositories",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepositories",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepositories",
  UsersRepository
);
